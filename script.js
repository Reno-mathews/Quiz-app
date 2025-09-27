let questions = [
    { question: "What is 2+2", options: [1, 2, 3, 4], answer: 4},
    { question: "What is 3+3", options: [1, 2, 5, 6], answer: 6},
    { question: "What is 4+4", options: [1, 2, 7, 8], answer: 8}
];

const time_limit = 15;

function loadQuestion(index) {
    selectedAnswer = null;
    let q = questions[index];
        let progressPercent = ((index +1) / questions.length) * 100;
    document.getElementById("progress-bar").style.width = progressPercent + "%";
    let qnum = index + 1;
    let totalq = questions.length;
    buttons.forEach(btn => btn.classList.remove('highlighted'));
    document.getElementById("question").innerText = q.question;

    const time = time_limit;



    

    document.getElementById("opt1").innerText = q.options[0];
    document.getElementById("opt2").innerText = q.options[1];
    document.getElementById("opt3").innerText = q.options[2];
    document.getElementById("opt4").innerText = q.options[3];

    document.getElementById("progress").innerText = "Question " + qnum + " of " + totalq;
    document.getElementById("next").disabled = true;
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
    
    /*if (selectedAnswer == null){
        alert("Please select an answer")
    }*/

    currentQuestionIndex = currentQuestionIndex + 1;
    if (currentQuestionIndex < questions.length) {
        document.getElementById("Rans").innerText = "";
        document.getElementById("Wans").innerText = "";
        document.getElementById("Psa").innerText = "";

        loadQuestion(currentQuestionIndex);



    } 
    else {
        document.getElementById("question").style.display = "none";
        document.getElementById("options").style.display = "none";
        document.getElementById("next").style.display = "none";
        document.getElementById("submitbtn").style.display = "none";
        document.getElementById("feedback").style.display = "none";
        document.getElementById("Restart").style.display= "block";
        document.getElementById("final").style.display = "block";
        document.getElementById("finalscore").innerText = "Final Score: " + score + "/" + questions.length;
    }
    
    document.getElementById("Psa").innerText = "";
    document.getElementById("Rans").innerText = "";
    document.getElementById("Wans").innerText = "";
});

const submitbtn = document.querySelector('#submitbtn');

submitbtn.addEventListener('click', () => {
    if (selectedAnswer == null){
    document.getElementById("Psa").innerText = "Please select an answer.";
    }

    else{
    if (selectedAnswer == questions[currentQuestionIndex].answer) {
        document.getElementById("Rans").innerText = "The answer is correct."
        score++;
    } else {
        document.getElementById("Wans").innerText= "The answer is incorrect."
    }

    document.getElementById("next").disabled = false;
}});

const restartbtn = document.getElementById("Restart");

restartbtn.addEventListener('click', () =>{
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    document.getElementById("Psa").innerText = "";
    document.getElementById("Rans").innerText = "";
    document.getElementById("Wans").innerText = "";
    document.getElementById("progress-bar").style.width = "0%";

    document.getElementById("question").style.display = "block";
    document.getElementById("options").style.display = "block";
    document.getElementById("next").style.display = "block";
    document.getElementById("submitbtn").style.display = "block";
    document.getElementById("feedback").style.display = "block";

    document.getElementById("final").style.display = "none";


    loadQuestion(0);
})

loadQuestion(0);  

