//Selection the classes from the index.html file 
var questionEl = document.querySelector(".questions");
var answerEl = document.querySelector(".answers");
var buttonEl = document.querySelector(".btn");
var timerEl = document.querySelector(".timer");



function startTimer(){
    timer = setInterval(function() {
        timerCount --;
        timerEl.textContent = timerCount;
        if(timerCount == 0) {
            clearInterval(timer);
            questionEl.textContent = "You lose";
            answerEl.textContent ="";        
        }
    }, 1000);
}

function firstQuestion(){
    //Creating the first question
    questionEl.textContent = "Commonly used data types DO NOT include:";

    //aligning the answers to the left
    document.getElementById("answers").style.textAlign ="left";

    //Clearing the answer element
    answerEl.innerHTML = "";

    //Creating first list element for the first answer.
    var li1 = document.createElement("li");

    //Creating first answer and appending it to the list and then appending the list to the answer element
    var answer1 = document.createElement("button");
    answer1.classList.add("btn");
    answer1.textContent = "Strings";
    answer1.style.margin = "1%";
    li1.appendChild(answer1);
    answerEl.appendChild(li1);

    //Creating second list element for the first answer.
    var li2 = document.createElement("li");

    //Creating second answer and appending it to the list and then appending the list to the answer element
    var answer2 = document.createElement("button")
    answer2.classList.add("btn");
    answer2.textContent = "Booleans";
    answer2.style.margin = "1%";
    li2.appendChild(answer2);
    answerEl.appendChild(li2);

    //Creating third list element for the first answer.
    var li3 = document.createElement("li");

    //Creating third answer and appending it to the list and then appending the list to the answer element
    var answer3 = document.createElement("button");
    answer3.classList.add("btn");
    answer3.textContent = "Alerts";
    answer3.style.margin = "1%";
    li3.appendChild(answer3);
    answerEl.appendChild(li3);

    //Creating fourth list element for the first answer.
    var li4 = document.createElement("li");

    //Creating fourth answer and appending it to the list and then appending the list to the answer element
    var answer4 = document.createElement("button");
    answer4.classList.add("btn");
    answer4.textContent = "Numbers";
    answer4.style.margin = "1%";
    li4.appendChild(answer4);
    answerEl.appendChild(li4);

    //Need to create condition that checks which button was pressed, checks if it was correct, and then removes time from the score if wrong

    //need to addeventlistener to the answerEl that triggers the next question.

}


function startGame() {
    timerCount = 20;
    startTimer();
    firstQuestion();
}




buttonEl.addEventListener("click", startGame);