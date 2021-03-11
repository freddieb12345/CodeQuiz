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
            questionEl.textContent = "Game Over";
            answerEl.textContent ="";        
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
        secondQuestion()
    })

    answer2.addEventListener("click", function(){
        timerCount = timerCount - 10;
        secondQuestion()
    })

    answer3.addEventListener("click", function(){
        secondQuestion()
    })

    answer4.addEventListener("click", function(){
        timerCount = timerCount - 10;
        secondQuestion()
    })
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
        /* secondQuestion() */
    })

    answer2.addEventListener("click", function(){
        timerCount = timerCount - 10;
        /* secondQuestion() */
    })

    answer3.addEventListener("click", function(){
        timerCount = timerCount - 10;
        /* secondQuestion() */
    })

    answer4.addEventListener("click", function(){
        /* secondQuestion() */
    })
}


function startGame() {
    timerCount = 20;
    startTimer();
    firstQuestion();
}




buttonEl.addEventListener("click", startGame);