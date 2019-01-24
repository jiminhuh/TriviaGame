//Click Start button to wipe game div and start quiz
//Each question will be an object inside a game object
//   - question:
//   - answer: (this will be a number based on which radio button is pressed)
//This will automatically start countdown from 30 secs.
//If countdown reaches 0 secs, display "Time's Up" then move on to next question in 2 secs.
//If player chooses wrong answer display "Wrong" then move on to next questions in 2 secs.
//At the end, display # questions right, # questions wrong, and option to restart game. 

var game = {
    // Create object of questions made into seperate objects
    questions: [
        {
            question: "Which animal has the longest lifespan?",
            answerChoices: ["Elephant", "locust","blue whale","giant tortoise"],
            answer: "Answer is Giant Tortoise!",
            picture: "assets/images/tortoise.jpg"
        },
        {
            question: "Which is the only mammal capable of true flight?",
            answerChoices: ["Hummingbird", "bat", "ocelot", "flying squirrel"],
            answer: "Answer is Hummingbird!",
            picture: "assets/images/hummingbird.jpg"
        },
        {
            question: "How many times, per second, can a Hummingbird flap its wings?",
            answerChoices: [20,40,80,160],
            answer: "Answer is 160!",
            picture: "assets/images/hummingbird.gif"
        },
        {
            question: "Which is the smallest mammal in the world?",
            answerChoices: ["Western harvest mouse", "numbat", "pygmy marmoset", "bumblebee bat"],
            answer: "Answer is Bumblebee Bat",
            picture: "assets/images/bumblebeebat.jpg"
        },
        {
            question: "Which is the fastest flying bird in the world?",
            answerChoices: ["Harpy Eagle", "Peregrine Falcon", "Spine-Tailed Swift", "Horned Sungem"],
            answer: "Answer is Spine-Tailed Swift",
            picture: "assets/images/spinetail.jpg"
        }
    ],

    timer: 30,

    // Start method to start game when start button is pressed
    start: function () {
        var button = $("#start-button");
        button.on("click", () => {
            // reset the div for the trivia
            $("button").remove();
            $("#question").text("");
            game.populate();
        })
    },

    populate: function() {
        for(var i = 0; i < game.questions.length; i++) {
            var quiz = $("#quiz");
            var quizTemplate = 
            "<div id='populate'> <h2 id='question'>" + game.questions[i].question + "</h2>" +
            "<div class='answer-div'><input type='radio' value='1' id='choice1'> <label for='choice1' id='choice-1'>" + game.questions[i].answerChoices[0] + "</label></div>" +
        "<div class='answer-div'><input type='radio' value='2' id='choice2'> <label for='choice2' id='choice-1'>" + game.questions[i].answerChoices[1] + "</label></div>" +
        "<div class='answer-div'><input type='radio' value='3' id='choice3'> <label for='choice3' id='choice-1'>" + game.questions[i].answerChoices[2] + "</label></div>" +
        "<div class='answer-div'><input type='radio' value='4' id='choice4'> <label for='choice4' id='choice-1'>" + game.questions[i].answerChoices[3] + "</label><div></div>";

            quiz.append(quizTemplate);
        }
        quiz.append("<input type ='submit' id='submitBtn' value='Submit'>");
        quiz.prepend("<h3 id='time'> Time: " + game.timer + "</h3>");
    }
}

game.start();
