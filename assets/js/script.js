//Selection the classes from the index.html file 
var questionEl = document.querySelector(".questions");
var answerEl = document.querySelector(".answers");
var buttonEl = document.querySelector(".btn");
var timerEl = document.querySelector(".timer");



function startTimer(){
    timer = setInterval(function() {
        timerCount --;
        timerEl.textContent = timerCount;
        if(timerCount === 0) {
            clearInterval(timer);
            questionEl.textContent = "You lose";
            answerEl.textContent ="";        
        }
    }, 1000);
}

function firstQuestion(){
    questionEl.textContent = "Commonly used data types DO NOT include:";

    document.getElementById("answers").style.textAlign ="left";

    answerEl.innerHTML = "";

    var li = document.createElement("li");
    li.textContent = [];

    var answer1 = document.createElement("button");
    answer1.textContent = "Strings";
    li.appendChild(answer1);
    answerEl.appendChild(li);

    var li = document.createElement("li");
    li.textContent = [];

    var answer2 = document.createElement("button");
    answer2.textContent = "Booleans";
    li.appendChild(answer2);
    answerEl.appendChild(li);

    var li = document.createElement("li");
    li.textContent = [];

    var answer3 = document.createElement("button");
    answer3.textContent = "Alerts";
    li.appendChild(answer3);
    answerEl.appendChild(li);

    var li = document.createElement("li");
    li.textContent = [];

    var answer4 = document.createElement("button");
    answer4.textContent = "Numbers";
    li.appendChild(answer4);
    answerEl.appendChild(li);

    /* answerEl.innerHTML ="";
    var answer1 = document.createElement("li");
    answer1.textContent = "Strings";
    answer1.setAttribute() */
}


function startGame() {
    timerCount = 20;
    startTimer();
    firstQuestion();
}




buttonEl.addEventListener("click", startGame);