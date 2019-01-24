//Click Start button to wipe game div and start quiz
//Each question will be an object inside a game object
//   - question:
//   - answer: (this will be a number based on which radio button is pressed)
//This will automatically start countdown from 30 secs.
//If countdown reaches 0 secs, display "Time's Up" then shows score screen
//If user finishes and presses submit then shows score screen
// score screen consists of # of right, # of wrong and # of did not answer and a replay button

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
            answerChoices: [20,160,80,40],
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
    answer: ["4", "1", "2", "4", "3"],
    timer: 30,

    // Start method to start game when start button is pressed
    start: function () {
        var button = $("#start-button");
        button.on("click", () => {
            // reset the div for the trivia
            $("button").remove();
            $("#question").text("");
            game.quiz();
        })
    },

    quiz: function() {
        for(var i = 0; i < game.questions.length; i++) {
            var quiz = $("#quiz");
            var quizTemplate = 
            "<form id='populate'> <h2 id='question'>" + game.questions[i].question + "</h2>" +
            "<input type='radio' value='1' name='choice" + i +"'> <label for='choice1'>" + game.questions[i].answerChoices[0] + "</label>" +
        "<input type='radio' value='2' name='choice" + i +"'> <label for='choice2'>" + game.questions[i].answerChoices[1] + "</label>" +
        "<input type='radio' value='3' name='choice" + i +"'> <label for='choice3'>" + game.questions[i].answerChoices[2] + "</label>" +
        "<input type='radio' value='4' name='choice" + i +"'> <label for='choice4'>" + game.questions[i].answerChoices[3] + "</label></form>";

            quiz.append(quizTemplate);
        }

        quiz.append("<input type ='submit' id='submitBtn' value='Submit'>");
        quiz.prepend("<h3 id='time'> Time: " + game.timer + "</h3>");

        var myTimer = setInterval(function () {
            game.timer--;
            $("#time").text("Time: " + game.timer);
            if (game.timer === 0) {
                var value1 = $("input[name='choice0']:checked").val();
                var value2 = $("input[name='choice1']:checked").val();
                var value3 = $("input[name='choice2']:checked").val();
                var value4 = $("input[name='choice3']:checked").val();
                var value5 = $("input[name='choice4']:checked").val();
                
                radioValue.push(value1, value2, value3, value4, value5);
                console.log(radioValue);

                for(var i = 0; i < game.questions.length; i++) {
                    if(radioValue[i] == undefined) {
                        DNA.push(i);
                    } else if(radioValue[i] == game.answer[i]) {
                        rightArray.push(radioValue[i]);
                    } else if(radioValue[i] !== game.answer[i] && radioValue[i] !== undefined) {
                        wrongArray.push(radioValue[i]);
                    }
                }   
                console.log(radioValue, rightArray, wrongArray, DNA, game.answer);
                $("#quiz").empty();
                var final = 
                "<div id='final-div'><h2> Times Up!</h2>" +
                "<div id='final'> <h2> You got: " + rightArray.length + " right! </h2>" +
                "<h2> You got: " + wrongArray.length + " wrong! </h2>" +
                "<h2> You did not Answer: " + DNA.length + " questions! </h2>" +
                "<input type = 'button' value='Replay' id='restart'></div>";
                $("#quiz").append(final);

                $("#restart").on("click", function() {
                    game.timer = 30;
                    $("#quiz").empty();
                    game.quiz();
                })
                clearInterval(myTimer);
            }
        },1000)




        var radioValue = [];
        var rightArray = [];
        var wrongArray = [];
        var DNA = [];

        $("#submitBtn").on("click",function(){
            clearInterval(myTimer);
            var value1 = $("input[name='choice0']:checked").val();
            var value2 = $("input[name='choice1']:checked").val();
            var value3 = $("input[name='choice2']:checked").val();
            var value4 = $("input[name='choice3']:checked").val();
            var value5 = $("input[name='choice4']:checked").val();
            
            radioValue.push(value1, value2, value3, value4, value5);
            console.log(radioValue);

            for(var i = 0; i < game.questions.length; i++) {
                if(radioValue[i] == undefined) {
                    DNA.push(i);
                } else if(radioValue[i] == game.answer[i]) {
                    rightArray.push(radioValue[i]);
                } else if(radioValue[i] !== game.answer[i] && radioValue[i] !== undefined) {
                    wrongArray.push(radioValue[i]);
                }
            }   
            console.log(radioValue, rightArray, wrongArray, DNA, game.answer);
            $("#quiz").empty();
            var final = 
            "<div id='final-div'><h2> Times Up!</h2>" +
            "<div id='final'> <h2> You got: " + rightArray.length + " right! </h2>" +
            "<h2> You got: " + wrongArray.length + " wrong! </h2>" +
            "<h2> You did not Answer: " + DNA.length + " questions! </h2>" +
            "<input type = 'button' value='Replay' id='restart'></div>";
            $("#quiz").append(final);

            $("#restart").on("click", function() {
                game.timer = 30;
                $("#quiz").empty();
                game.quiz();
            })
        })
    }
}



game.start();
