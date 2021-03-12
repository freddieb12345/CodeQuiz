//Selection the classes from the index.html file 
var questionEl = document.querySelector(".questions");
var answerEl = document.querySelector(".answers");
var buttonEl = document.querySelector(".btn");
var timerEl = document.querySelector(".timer");
var resultEl = document.querySelector(".result");
var scoreEl = document.querySelector(".scoreboard")

var scoreboard = {};

var initials = [];
var timerScore = [];


function updateScores() {
    document.getElementById("scoreboard").style.display="inline";

    scoreEl.innerHTML = "Highscores"; //Clear the scoreElement
    var sortable =[];

    for (var i in scoreboard) {
        sortable.push([i, scoreboard[i]]);
    }
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });
    var sortedScoreboard = {};

    sortable.forEach(function(item){
        sortedScoreboard[item[0]]=item[1]
    })

    for (var i in sortedScoreboard) {
        var li = document.createElement("li")
        li.textContent = [i] + " " + sortedScoreboard[i];
        /* li.setAttribute("data-index", i); */
    
        scoreEl.appendChild(li);
      }


    /* var scoreboardList = document.createElement("li"); //Creating list element
    
    var score = localStorage.getItem("timer");//Getting score from local storage
    var initials = localStorage.getItem("inputValue");//Getting initials from local storage

    scoreboardList.textContent = score + "-" + initials;
    
    scoreEl.appendChild(scoreboardList); */
}

function init() {
    document.getElementById("scoreboard").style.display="none";
    var storedScoreboard = JSON.parse(localStorage.getItem("scoreboard"));

    if (storedScoreboard !== null) {
        scoreboard = storedScoreboard;
    }
    /* updateScores(); */
}

//Creating end screen 
function endScreen(timeLeft) {
    document.getElementById("startButton").style.display="inline";
    buttonEl.textContent = "Start again";
    
    clearInterval(timer);
    
    scoreEl.textContent ="Highscores";
    answerEl.style.textAlign ="center";

    questionEl.textContent = "Game Over"; //Creating Game Over header

    answerEl.textContent = ""; //Clearing answerEl
    resultEl.textContent = ""; //Clearing resultEl

    var input = document.createElement("input") //Creating input for initials
    input.setAttribute("type", "text");
    input.setAttribute("value", "Input Initials");
    answerEl.appendChild(input); //Appending the input to the answerEl
    var submit = document.createElement("button"); //Creating save button
    submit.classList.add("btn");
    submit.textContent = "Save";
    answerEl.appendChild(submit); //Appending save button to the answerEl

    /* console.log(timerScore)
    timerScore.push(timeLeft);
    timerScore.sort(function(a, b){return b-a});

    localStorage.setItem("timer", JSON.stringify(timerScore)); */

    submit.addEventListener("click", function(event) {
        event.preventDefault();

        var inputValue = document.querySelector("input").value;

        scoreboard[inputValue] = timeLeft //adding score and initials to the scoreboard object
        console.log(scoreboard);
    
        /* initials.push(inputValue);
        console.log(initials);
        initials.sort(function(a, b){return b-a}); */
        
        localStorage.setItem("scoreboard", JSON.stringify(scoreboard));
        updateScores();
    })
    
}

//Creating timer
function startTimer(){
    timer = setInterval(function() {
        timerCount --;
        timerEl.textContent = timerCount;
        var timeLeft = timerCount;
        /* console.log(timeLeft); */
        if(timerCount == 0) {
            clearInterval(timer);
            endScreen(timeLeft);
        }
    }, 1000);
}

function firstQuestion(){
    questionEl.textContent = "Commonly used data types DO NOT include:"; //Creating the first question
    
    document.getElementById("answers").style.textAlign ="left"; //aligning the answers to the left

    answerEl.innerHTML = ""; //Clearing the answer element

    var li1 = document.createElement("li"); //Creating first list element for the first answer.

    //Creating first answer and appending it to the list and then appending the list to the answer element
    var answer1 = document.createElement("button");
    answer1.classList.add("btn");
    answer1.textContent = "Strings";
    li1.appendChild(answer1);
    answerEl.appendChild(li1);
    
    var li2 = document.createElement("li"); //Creating second list element for the first answer.

    //Creating second answer and appending it to the list and then appending the list to the answer element
    var answer2 = document.createElement("button")
    answer2.classList.add("btn");
    answer2.textContent = "Booleans";
    li2.appendChild(answer2);
    answerEl.appendChild(li2);

    var li3 = document.createElement("li"); //Creating third list element for the first answer.

    //Creating third answer and appending it to the list and then appending the list to the answer element
    //THIS IS THE CORRECT ANSWER
    var answer3 = document.createElement("button");
    answer3.classList.add("btn");
    answer3.textContent = "Alerts";
    li3.appendChild(answer3);
    answerEl.appendChild(li3);

    var li4 = document.createElement("li");//Creating fourth list element for the first answer.

    //Creating fourth answer and appending it to the list and then appending the list to the answer element
    var answer4 = document.createElement("button");
    answer4.classList.add("btn");
    answer4.textContent = "Numbers";
    li4.appendChild(answer4);
    answerEl.appendChild(li4);

    
    //Add event listeners to check which button has been pressed
    answer1.addEventListener("click", function(){
        timerCount = timerCount - 10;
        resultEl.textContent = "Wrong"
        secondQuestion()
    })

    answer2.addEventListener("click", function(){
        timerCount = timerCount - 10;
        resultEl.textContent = "Wrong"
        secondQuestion()
    })

    answer3.addEventListener("click", function(){
        resultEl.textContent = "Right!"
        secondQuestion()
    })

    answer4.addEventListener("click", function(){
        timerCount = timerCount - 10;
        resultEl.textContent = "Wrong"
        secondQuestion()
    })
    /* document.scoreEl.style.display ="none"; */
    
    document.getElementById("startButton").style.display="none";
    document.getElementById("scoreboard").style.display="none";
    
}

function secondQuestion() {
    questionEl.textContent = "Arrays in JavaScript can be used to store _______."; //Creating second question

    answerEl.innerHTML = ""; //Clearing the answer element

    var li1 = document.createElement("li"); //Creating first list element for the first answer.

    //Creating first answer and appending it to the list and then appending the list to the answer element
    var answer1 = document.createElement("button");
    answer1.classList.add("btn");
    answer1.textContent = "Numbers and strings";
    li1.appendChild(answer1);
    answerEl.appendChild(li1);

    var li2 = document.createElement("li"); //Creating second list element for the first answer.

    //Creating second answer and appending it to the list and then appending the list to the answer element
    var answer2 = document.createElement("button")
    answer2.classList.add("btn");
    answer2.textContent = "Other arrays";
    li2.appendChild(answer2);
    answerEl.appendChild(li2);

    var li3 = document.createElement("li"); //Creating third list element for the first answer.

    //Creating third answer and appending it to the list and then appending the list to the answer element
    var answer3 = document.createElement("button");
    answer3.classList.add("btn");
    answer3.textContent = "Booleans";
    li3.appendChild(answer3);
    answerEl.appendChild(li3);

    var li4 = document.createElement("li");//Creating fourth list element for the first answer.

    //Creating fourth answer and appending it to the list and then appending the list to the answer element
    //THIS IS THE CORRECT ANSWER
    var answer4 = document.createElement("button");
    answer4.classList.add("btn");
    answer4.textContent = "All of the above";
    li4.appendChild(answer4);
    answerEl.appendChild(li4);

    //Add event listeners to check which button has been pressed
    answer1.addEventListener("click", function(){
        timerCount = timerCount - 10;
        resultEl.textContent = "Wrong"
        thirdQuestion()
    })

    answer2.addEventListener("click", function(){
        timerCount = timerCount - 10;
        resultEl.textContent = "Wrong"
        thirdQuestion()
    })

    answer3.addEventListener("click", function(){
        timerCount = timerCount - 10;
        resultEl.textContent = "Wrong"
        thirdQuestion()
    })

    answer4.addEventListener("click", function(){
        resultEl.textContent = "Right!"
        thirdQuestion()
    })
    /* document.scoreEl.style.display ="none"; */
}

function thirdQuestion() {
    questionEl.textContent = "The condition in an if/else statement is enclosed within _____."; //Creating second question

    answerEl.innerHTML = ""; //Clearing the answer element

    var li1 = document.createElement("li"); //Creating first list element for the first answer.

    //Creating first answer and appending it to the list and then appending the list to the answer element
    var answer1 = document.createElement("button");
    answer1.classList.add("btn");
    answer1.textContent = "Quotes";
    li1.appendChild(answer1);
    answerEl.appendChild(li1);

    var li2 = document.createElement("li"); //Creating second list element for the first answer.

    //Creating second answer and appending it to the list and then appending the list to the answer element
    var answer2 = document.createElement("button")
    answer2.classList.add("btn");
    answer2.textContent = "Curly Brackets";
    li2.appendChild(answer2);
    answerEl.appendChild(li2);

    var li3 = document.createElement("li"); //Creating third list element for the first answer.

    //Creating third answer and appending it to the list and then appending the list to the answer element
    //THIS IS THE CORRECT ANSWER
    var answer3 = document.createElement("button");
    answer3.classList.add("btn");
    answer3.textContent = "Parenthesis";
    li3.appendChild(answer3);
    answerEl.appendChild(li3);

    var li4 = document.createElement("li");//Creating fourth list element for the first answer.

    //Creating fourth answer and appending it to the list and then appending the list to the answer element
    var answer4 = document.createElement("button");
    answer4.classList.add("btn");
    answer4.textContent = "Square Brackets";
    li4.appendChild(answer4);
    answerEl.appendChild(li4);

    //Add event listeners to check which button has been pressed
    answer1.addEventListener("click", function(){
        timerCount = timerCount - 10;
        resultEl.textContent = "Wrong"
        fourthQuestion()
    })

    answer2.addEventListener("click", function(){
        timerCount = timerCount - 10;
        resultEl.textContent = "Wrong"
        fourthQuestion()
    })

    answer3.addEventListener("click", function(){
        resultEl.textContent = "Right!"
        fourthQuestion()
    })

    answer4.addEventListener("click", function(){
        timerCount = timerCount - 10;
        resultEl.textContent = "Wrong"
        fourthQuestion()
    })
    /* document.scoreEl.style.display ="none"; */
}

function fourthQuestion() {
    questionEl.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:"; //Creating second question

    answerEl.innerHTML = ""; //Clearing the answer element

    var li1 = document.createElement("li"); //Creating first list element for the first answer.

    //Creating first answer and appending it to the list and then appending the list to the answer element
    var answer1 = document.createElement("button");
    answer1.classList.add("btn");
    answer1.textContent = "JavaScript";
    li1.appendChild(answer1);
    answerEl.appendChild(li1);

    var li2 = document.createElement("li"); //Creating second list element for the first answer.

    //Creating second answer and appending it to the list and then appending the list to the answer element
    var answer2 = document.createElement("button")
    answer2.classList.add("btn");
    answer2.textContent = "Terminal/Bash";
    li2.appendChild(answer2);
    answerEl.appendChild(li2);

    var li3 = document.createElement("li"); //Creating third list element for the first answer.

    //Creating third answer and appending it to the list and then appending the list to the answer element
    //THIS IS THE CORRECT ANSWER
    var answer3 = document.createElement("button");
    answer3.classList.add("btn");
    answer3.textContent = "For loops";
    li3.appendChild(answer3);
    answerEl.appendChild(li3);

    var li4 = document.createElement("li");//Creating fourth list element for the first answer.

    //Creating fourth answer and appending it to the list and then appending the list to the answer element
    var answer4 = document.createElement("button");
    answer4.classList.add("btn");
    answer4.textContent = "Console Log";
    li4.appendChild(answer4);
    answerEl.appendChild(li4);

    //Add event listeners to check which button has been pressed
    answer1.addEventListener("click", function(){
        timerCount = timerCount - 10;
        var timeLeft = timerCount;
        resultEl.textContent = "Wrong"
        endScreen(timeLeft);
        
    })

    answer2.addEventListener("click", function(){
        timerCount = timerCount - 10;
        var timeLeft = timerCount;
        resultEl.textContent = "Wrong"
        endScreen(timeLeft);
        
    })

    answer3.addEventListener("click", function(){
        timerCount = timerCount - 10;
        var timeLeft = timerCount;
        resultEl.textContent = "Wrong"
        endScreen(timeLeft);
        
    })

    answer4.addEventListener("click", function(){
        resultEl.textContent = "Right!"
        var timeLeft = timerCount;
        endScreen(timeLeft);

    })
    /* document.scoreEl.style.display ="none"; */
}

//Creating start game function
function startGame() {
    timerCount = 20;
    startTimer();
    firstQuestion();
}




buttonEl.addEventListener("click", startGame);

init();