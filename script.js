let questions = [
    { question: "What is 2+2", options: [1, 2, 3, 4], answer: 4},
    { question: "What is 3+3", options: [1, 2, 5, 6], answer: 6},
    { question: "What is 4+4", options: [1, 2, 7, 8], answer: 8}
];

function loadQuestion(index) {
    selectedAnswer = null;
    let q = questions[index];
    buttons.forEach(btn => btn.classList.remove('highlighted'));
    document.getElementById("question").innerText = q.question;


    document.getElementById("opt1").innerText = q.options[0];
    document.getElementById("opt2").innerText = q.options[1];
    document.getElementById("opt3").innerText = q.options[2];
    document.getElementById("opt4").innerText = q.options[3];

}

let currentQuestionIndex = 0;
let score = 0;

const buttons = document.querySelectorAll('.opt');
let selectedAnswer = null;




buttons.forEach(button=> {
    button.addEventListener('click', () => {
       

        selectedAnswer = button.innerText;

    });
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('highlighted'));

        button.classList.add('highlighted');
    })

});

const nxtb = document.querySelector('#next');

nxtb.addEventListener('click', () => {
    
    if (selectedAnswer == null){
        alert("Please select an answer")
    }
    else{
    if (selectedAnswer == questions[currentQuestionIndex].answer) {
        score++;
        console.log("Correct! Score:", score);
    } else {
        console.log("Wrong!");
    }

    currentQuestionIndex = currentQuestionIndex + 1;
    if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex);
    } 
    else {
        document.getElementById("question").style.display = "none";
        document.getElementById("options").style.display = "none";
        document.getElementById("next").style.display = "none";
        document.getElementById("final").style.display = "block";
        document.getElementById("final").innerText = "Final Score: " + score + "/" + questions.length;
    }
    }
    document.getElementById("Psa").innerText = "";
    document.getElementById("Rans").innerText = "";
    document.getElementById("Wans").innerText = "";
});

const submitbtn = document.querySelector('#submitbtn');

submitbtn.addEventListener('click', () => {
    if (selectedAnswer == null){
    Psa.innerText = "Please select an answer.";
    }

    else{
    if (selectedAnswer == questions[currentQuestionIndex].answer) {
        Rans.innerText = "The answer is correct."
    } else {
        Wans.innerText= "The answer is incorrect."
    }
}});

loadQuestion(0);