let questions = [
    { question: "What is 2+2", options: [1, 2, 3, 4], answer: 4},
    { question: "What is 3+3", options: [1, 2, 5, 6], answer: 6},
    { question: "What is 4+4", options: [1, 2, 7, 8], answer: 8}
];

function loadQuestion(index) {
    let q = questions[index];

    document.getElementById("question").innerText = q.question;

    document.getElementById("opt1").innerText = q.options[0];
    document.getElementById("opt2").innerText = q.options[1];
    document.getElementById("opt3").innerText = q.options[2];
    document.getElementById("opt4").innerText = q.options[3];

}

let currentQuestionIndex = 0;
let score = 0;

const buttons = document.querySelectorAll('.opt');




buttons.forEach(button=> {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('highlighted'));

        button.classList.add('highlighted');

        const selectedAnswer = button.innerText;

        if (selectedAnswer == questions[currentQuestionIndex].answer) {
            score++;
            console.log("Correct! Score:", score);
        } else {
            console.log("Wrong!");
        }
    });
});

loadQuestion(0);