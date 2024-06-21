var questions = [
    {
        id: 1,
        question: "Who is captain of Pakistan Cricket Team?",
        options: {
            a: "Babar Azam",
            b: "Shaheen Afridi",
            c: "Muhammad Rizwan",
            d: "Shan Masood",

        },
        answer: "Babar Azam"
    },
    {
        id: 2,
        question: "How many times Pakistan wins ODI World Cup",
        options: {
            a: "2 times",
            b: "5 times",
            c: "1 time",
            d: "Pakistan never won ODI World Cup",

        },
        answer: "1 time"
    },
    {
        id: 3,
        question: "Who has the record of most wickets in T20",
        options: {
            a: "Shadab Khan",
            b: "Rashid Khan",
            c: "Sunil Narine",
            d: "Tim Southee",

        },
        answer: "Tim Southee"
    }
    ,
    {
        id: 4,
        question: "Which player held the record of most t20I runs ",
        options: {
            a: "Babar Azam",
            b: "Virat Kohli",
            c: "Rohit Sharma",
            d: "Martin Guptil",

        },
        answer: "Babar Azam"
    }
    ,
    {
        id: 5,
        question: "How many players in a cricket team:",
        options: {
            a: "6",
            b: "20",
            c: "9",
            d: "11",

        },
        answer: "11"
    },
    {
        id: 6,
        question: "What is the maximum range of days in Test Cricket",
        options: {
            a: "3",
            b: "5",
            c: "10",
            d: "4",

        },
        answer: "5"
    },
    {
        id: 7,
        question: "Which Team won the T20 World Cup twice",
        options: {
            a: "England",
            b: "Westindies",
            c: "India",
            d: "Both A and B",

        },
        answer: "Both A and B"
    }
]



// set user name or user email
var userName = document.getElementById("userName")
var userEmail = document.getElementById("userEmail")
userName.innerHTML = localStorage.getItem("name")
userEmail.innerHTML = localStorage.getItem("email")

var htmlQues = document.getElementById("htmlQues")
var htmlOptions = document.getElementById("htmlOptions")
var indexNum = 0
var nextQuesBtn = document.getElementById("nextQuesBtn")
var correctAnsCount = 0
var wrongAnsCount = 0

// counter
var currentCount = document.getElementById("currentCount")
var totalCount = document.getElementById("totalCount")
totalCount.innerHTML = questions.length

var resultContainer = document.getElementsByClassName("resultContainer")[0]
var correctAns = document.getElementById("correctAns")
var wrongAns = document.getElementById("wrongAns")





function startQuiz() {

    htmlQues.innerHTML = questions[indexNum].question

    htmlOptions.innerHTML = ""

    for (var key in questions[indexNum].options) {
        var option = questions[indexNum].options[key]
        htmlOptions.innerHTML += ` <li onclick="checkAnswer(this)" >${option}</li>`


    }




}

var quizContainer = document.getElementById("quizContainer")
function nextQues() {
    if (indexNum < questions.length - 1) {
        indexNum++
        currentCount.innerHTML++
        // console.log("nextQues", indexNum)
        nextQuesBtn.className = "hide"
        startQuiz()
    } else {
        quizContainer.style.display = "none"
        resultContainer.className = "show"
        correctAns.innerHTML = correctAnsCount
        wrongAns.innerHTML = wrongAnsCount
    }
}



function checkAnswer(ele) {
  

    var liOptions = htmlOptions.getElementsByTagName("li")
    var isCheck = ele.innerHTML === questions[indexNum].answer
    if (isCheck) {
        console.log("correct!")
        ele.className = "correctAns"
        correctAnsCount++
    } else {
        console.log(" Incorrect!")
        ele.className = "wrongAns"
        wrongAnsCount++
        for (var li of liOptions) {
            if (li.innerHTML === questions[indexNum].answer) {
                li.className = "correctAns"
            }
        }

    }
    for (var li of liOptions) {
        console.log(li)
        li.style.pointerEvents = "none"
        li.style.cursor = "no-drop !important"
    }

    
    nextQuesBtn.className = "show"


}
// yha tk hogya age timer ka kam he
function startTimer(duration, displayElement, callback) {
    var timer = duration;
    var minutes, seconds;

    var intervalId= setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        displayElement.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(intervalId);
            if (callback && typeof callback === 'function') {
                callback();
        }
        }
    }, 1000);
}


var quizTimeInSeconds = 60; // 1 minute timer for the quiz
var display = document.getElementById('timer'); // Assuming there is an element with id 'timer' to display the timer
var quizContainer = document.getElementById("quizContainer")

startTimer(quizTimeInSeconds, display, function() {
    // Callback function to execute when timer runs out
    alert('Time is up!');
       if (alert){
              resultContainer.className = "show"
        correctAns.innerHTML = correctAnsCount
        wrongAns.innerHTML = wrongAnsCount
         quizContainer.style.display = "none"
        }
       

    }
)
