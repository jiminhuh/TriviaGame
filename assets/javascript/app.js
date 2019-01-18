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
    questions: {
        question1: {
            question: "Which animal has the longest lifespan?",
            answerChoices: ["Elephant", "locust","blue whale","giant tortoise"]
        },
        question2: {
            question: "Which is the only mammal capable of true flight?",
            answerChoices: ["Hummingbird", "bat", "ocelot", "flying squirrel"]
        },
        question3: {
            question: "Which is the world's most poisonous spider?",
            answerChoices: ["Brazilian wandering spider", "Brown recluse", "Syndney funnel spider", "Daddy Longlegs"]
        },
        question4: {
            question: "How many times, per second, can a Hummingbird flap its wings?",
            answerChoices: [20,40,80,160]
        },
        question5: {
            question: "Which is the smallest mammal in the world?",
            answerChoices: ["Western harvest mouse", "numbat", "pygmy marmoset", "bumblebee bat"]
        },
        question6: {
            question: "Which is the fastest flying bird in the world?",
            answerChoices: ["Harpy Eagle", "Peregrine Falcon", "Spine-Tailed Swift", "Horned Sungem"]
        }
    },
    
    // Array of final answers
    answers: [4,1,2,4,4,3],

    // Start method to start game when start button is pressed
    start: function () {
        var button = $("#start-button");
        button.on("click", function() {
            // reset the div for the trivia
            $("button").remove();
            $("#question").text("");
            // grab element via jQuery
            var question = $("#question")
            var answerChoices = $("#answerChoices")

        })
    }
}

game.start();