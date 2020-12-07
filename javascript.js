var counter = document.getElementById("nav-link");
//var totalQuestions = $('.questions').length();
var currentQuestion = 0;
$questions = $('.questions');
$questions.hide();
var counter = 75;

// Timer 
var timer;
    $(".btn-start").click( function(){
        if(!timer){
            timer = setInterval(function() {
            counter--;
        if (counter >= 0) {
            $("#timer").html("Seconds remaining: " + counter);
        }
        if (counter === 0) {
            alert("Time's up. Try again.");
            clearInterval(timer);
        }
        }, 1000);
    }
});

//check on quiz length
function nextQuestion () {
        
    if (currentQuestion == questions.length -1) {
        
        alert("Well done! Your score is " + counter);
        scores.push(counter);
        console.log(counter);
        window.location.replace("highscores.html"); 
        clearInterval(timer);
    }
    else {
        currentQuestion++;
        populateQuestion();
    }
};

// list of all questions, choices, and answers
var questions = [
    {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
},
{
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
},
{
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
    "numbers and strings",
    "other arrays",
    "booleans",
    "all of the above"
    ],
    answer: "all of the above"
},
{
    title:
    "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
},
{
    title:
    "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log"
}
];

//start screen - transition to questions

    //$(document).ready(function() {
    $(".timer").hide();
    $(".container").hide();

    $(".btn-start").click(function () {
        $(".greeting").fadeOut();

        // Delay inserted here, as questions began fading in before question had gone, 
        //   causing them to jump up once the greeting had finally left.
        var delayInMilliseconds = 1000; //1 second

            setTimeout(function() {
            $(".questions").fadeIn();
        }, delayInMilliseconds);
            currentQuestion = 0;
            populateQuestion();
    });
    
    //user selection
    $(".btn-outline-primary").click(function() {
        if (this.value == questions[currentQuestion].answer) {
        setTimeout(fade_in, 0);
            function fade_in() {
            $(".response").html("Correct")
            $(".response").fadeIn().delay(1000).fadeOut();
        }
        nextQuestion();
        }
        else if (this.value !== questions[currentQuestion].answer) {
        counter-=10;
        setTimeout(fade_in, 0);
            function fade_in() {
            $(".response").html("Incorrect")
            $(".response").fadeIn().delay(1000).fadeOut();
        }
        nextQuestion();
        }
    });


    
    //populate questions
        function populateQuestion () {
            for (var i=0; i < questions.length; i++) {
                $(".title").html(questions[currentQuestion].title);
                $(".choice1").prop("value", questions[currentQuestion].choices[0]);
                $(".choice2").prop("value", questions[currentQuestion].choices[1]);
                $(".choice3").prop("value", questions[currentQuestion].choices[2]);
                $(".choice4").prop("value", questions[currentQuestion].choices[3]);
        };
    };

    //leaderboard (incomplete)
    var initialForm = document.getElementById("initial-form");
    var initialInput = document.getElementById("initial-input");
    var leaderboard = document.querySelector("#leaderboard");
    
    var initials = [];
    var scores = [];
    var combined = [];
    
    function renderLeaderboard() {
        leaderboard.innerHTML = "";

        for (var i = 0; i < combined.length; i++) {
            var combined = conbined[i];

            var li = document.createElement("li");
            li.textContent = combined;
            li.setAttribute("high-score", i);

            leaderboard.appendChild(li);            
        }
    }

    function init() {
        var storedCombined = JSON.parse(localStorage.getItem("combined"));

        if (storedCombined !== null) {
            combined = storedCombined;
        }

        renderLeaderboard;
    }

    
    
    initialForm.addEventListener("submit",function() {
            var initialForm = initialInput.value.trim();
            console.log(initials); 

            if (initialForm === "") {
                return;
            }

            initials.push(initialForm);
            initialInput.value = "";


        });

    function combineDetails() {
        localStorage.setItem("combined", JSON.stringify(combined));
        for (i = 0; i < scores.length; i++) {
            combined.push(initials[i],scores[i]);
        }
        console.log(combined);
        
    }

    function finalise() {
        storeCombined();
        renderLeaderboard(); 
    }