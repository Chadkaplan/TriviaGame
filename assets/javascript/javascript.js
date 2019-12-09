$(document).ready(function () {
    console.log("Linked")
    var card = $("#gameSpace")
    var countStartNumber = 30
    var questions = [
        // Question 1
        {
            question: "What does HTML stand for?",
            answers: ["HyperText Markup Language", "How To Make Lasagna", "Hot Tortillas Move London", "Happy To Move Larry"],
            correctAnswer: "HyperText Markup Language",
            image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ",
        },
        // Question 2
        {
            question: "Which of these has the biggest text size",
            answers: ["h1", "h2", "h3", "h4"],
            correctAnswer: "h1",
            image: "https://neilpatel.com/wp-content/uploads/2017/03/image32-2.png",
        },
        // Question 3
        {
            question: "What does a div do",
            answers: ["Gives a way to attach styling", "Creates a grid system", "Makes your HTML more organized", "All of the Above"],
            correctAnswer: "All of the Above",
            image: "https://www.drupal.org/files/issues/2018-04-21/Screen%20Shot%202018-04-21%20at%2001.07.17.png",
        },
        // Question 4
        {
            question: "How can you set a javascript event to happen every 3 seconds?",
            answers: ["setInterval(this, 3);", "setTimeout(this, 3000);", "setInterval(this, 3000);", "setTimeout(this, 3)"],
            correctAnswer: "setInterval(this, 3000);",
            image: "https://i.ytimg.com/vi/U8tvwTDpgAI/maxresdefault.jpg",
        },
        // Question 5
        {
            question: "Which of the following is a CSS Framework",
            answers: ["Chinstrap", "Bootstrap", "Jockstrap", "strapstrap"],
            correctAnswer: "Bootstrap",
            image: "https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social-logo.png",
        },
        // Question 6
        {
            question: "In javascript functions are...",
            answers: ["elements", "used in HTML files", "objects", "hoisted"],
            correctAnswer: "hoisted",
            image: "https://s3.amazonaws.com/dashingd3js/d3-lesson-images/lesson-84/javascript-function-operator-call-versus-javascript-function-expression-call_720x355.png",
        },
        // Question 7
        {
            question: "How do you stop a setInterval()?",
            answers: ["clearInterval()", "It will stop on it's own after it runs once", "it can't be stopped", "clearInterval(var)"],
            correctAnswer: "clearInterval(var)",
            image: "https://i.stack.imgur.com/3CkCR.png",
        },
        // Question 8
        {
            question: "Using header instead of div can make your HTML...",
            answers: ["useless", "semantically clear", "more confusing", "throw an error"],
            correctAnswer: "semantically clear",
            image: "https://i.stack.imgur.com/6Q71P.png",
        },
        // Question 9
        {
            question: "An img tag must use which of the following",
            answers: ["a", "href", "src", "p"],
            correctAnswer: "src",
            image: "https://i.stack.imgur.com/BmKZn.png",
        },
        // Question 10
        {
            question: "What is the best quiz?",
            answers: ["This one", "Not this quiz", "Another Quiz", "No really it's the first answer"],
            correctAnswer: "This one",
            image: "https://www.dictionary.com/e/wp-content/uploads/2018/05/WOTD-quiz.jpg",
        },
        // keep copying these for more questions
    ]

    var game = {
        questions: questions,
        counter: countStartNumber,
        currentQuestion: 1
        ,
        correct: 0,
        incorrect: 0,


        countdown: function () {
            game.counter--;
            // display counter on page
            $("#secondsRemaining").html(game.counter)
            if (game.counter === 0) {
                console.log("TIME UP");
                game.timeUp();
            }
        },
        loadQuestion: function () {
            console.log("loadQuestion()")
            // Hide the Welcome header on first question
            $("#hideOnPlay").html("")
            // set timer variable
            timer = setInterval(game.countdown, 1000);
            // add question dynamically
            card.html(
                "<h2>" + "Question: " + game.currentQuestion + "</h2>" +
                "<br>" +
                "<h2>" + questions[this.currentQuestion].question + "</h2>");
            // for loop to go through questions
            for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
                card.append("<button class='answer-btn' id='button' data-name='" + questions[this.currentQuestion].answers[i]
                    + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
            }



        },
        nextQuestion: function () {
            console.log("nextQuestion()")
            // set countdown
            game.counter = countStartNumber;
            // display counter
            $("#counter-number").text(game.counter);
            // increment currentQuestion
            game.currentQuestion++;
            // run loadQuestion function
            game.loadQuestion();
        },
        timeUp: function () {
            console.log("timeUp()")
            // clearInterval
            clearInterval(timer);
            // display on page
            $("#counter-number").html(game.counter);
            card.html("<h2>Time is up!</h2>");
            card.append("<h4>Correct answer: " + question[this.currentQuestion].correctAnswer);
            card.append("<img src='" + question[this.currentQuestion].image + "' />");
            // conditional- if youre in current question or next question
            if (game.currentQuestion === question.length - 1) {
                setTimeout(game.results, 2 * 2000);
            }
            else {
                setTimeout(game.nextQuestion, 2 * 2000);
            }
        },
        results: function () {
            console.log("results()")
            // clear interval
            clearInterval(timer);
            // display results
            card.html("<h2>Results:</h2>");
            $("#counter-number").text(game.counter);
            card.append("<h4>Correct: " + game.correct + "</h4>");
            card.append("<h4>Incorrect: " + game.incorrect + "</h4>");
            card.append("<h4>Blank: " + (question.length - (game.incorrect + game.correct)) + "</h4>");
            card.append("<br><button id='start-over'>Start Over?</button>");
        },
        clicked: function (event) {
            console.log("clicked()")
            // clear interval
            clearInterval(timer);
            // display results
            if ($(event.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
                this.answerCorrectly();
            }
            else {
                this.answerIncorrectly();
            }
        },
        answerCorrectly: function () {
            console.log("answerCorrectly()")
            // clear interval
            clearInterval(timer);
            // increment correct
            game.correct++;
            // display that they are correct
            card.html("<h2>That's Right!</h2>");
            card.append("<img src='" + questions[game.currentQuestion].image + "' />");
            if (game.currentQuestion === questions.length - 1) {
                setTimeout(game.results, 3 * 1000);
            }
            else {
                setTimeout(game.nextQuestion, 3 * 1000);
            }
        },
        answerIncorrectly: function () {
            console.log("answerIncorrectly()")
            clearInterval(timer);
            // increment incorrect
            game.incorrect++;
            // display the right answer
            card.html("<h2>Sorry, that is incorrect.</h2>");
            card.append("<h4>The Correct Answer was: " + questions[game.currentQuestion].correctAnswer + "</h4>");
            card.append("<img src='" + questions[game.currentQuestion].image + "' />");
            // conditional to go to next question or results
            if (game.currentQuestion === questions.length - 1) {
                setTimeout(game.results, 3 * 1000);
            }
            else {
                setTimeout(game.nextQuestion, 3 * 1000);
            }
        },
        reset: function () {
            console.log("reset()")
            // function for blank state
            this.currentQuestion = 0;
            this.counter = countStartNumber;
            this.correct = 0;
            this.incorrect = 0;
            this.loadQuestion();
        },
        // bottom of ready function
    };
        // that calls to reset the game
        $(document).on("click", "#reset", function () {
            game.reset();
        });
        // calls the clicked function
        $(document).on("click", ".answer-btn", function (event) {
            game.clicked(event);
        });
        // calls the loadQuestion function
        $(document).on("click", "#play-btn", function () {
            game.loadQuestion();
        });
    });
    
    // Need to figure out clicking reset and creating multiple intervals by clicking play multiple times