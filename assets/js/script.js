//Selection the classes from the index.html file 
var questionEl = document.querySelector(".questions");
var answerEl = document.querySelector(".answers");
var buttonEl = document.querySelector(".btn");
var timerEl = document.querySelector(".timer");

var lossCounter = 0;


function startTimer(){
    timer = setInterval(function() {
        timerCount --;
        timerEl.textContent = timerCount;
        if(timerCount === 0) {
            clearInterval(timer);
            questionEl.textContent = "You lose";
            answerEl.textContent ="";
            lossCount ++;            
        }
    }, 1000);
}


function startGame() {
    timerCount = 2;
    startTimer();
   /*  firstQuestion();   */
}




buttonEl.addEventListener("click", startGame);