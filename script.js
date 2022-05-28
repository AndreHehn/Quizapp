let cardDeck = [
    {
        'question': "Inside which HTML element do we put the JavaScript?",
        'answers': ["&lt;java&gt;", "&lt;theScript&gt;", "&lt;script&gt;", "&lt;javascript&gt;"],
        'posRightAnswer': 2,
        'boolCheckAnswer': false
    },
    {
        'question': "Which of these does the for loop work with?",
        'answers': ["for (let i=0 ; i&lt;10 ; i++)", "for i&lt;10", "for (i=0 ; i&lt;10) ", "for (let i =0 ; i++)"],
        'posRightAnswer': 0,
        'boolCheckAnswer': false
    },
    {
        'question': "Which event occurs when the user clicks on an HTML element?",
        'answers': ["onmouseover", "onchange", "onclick", "onmouseclick"],
        'posRightAnswer': 2,
        'boolCheckAnswer': false
    },
    {
        'question': "Which operator is used to assign a value to a variable?",
        'answers': ["x", "-", "+", "="],
        'posRightAnswer': 3,
        'boolCheckAnswer': false
    }, {
        'question': "What is the correct way to write a JavaScript array?",
        'answers': ["var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = 'red', 'green', 'blue'", "var colors = ['red', 'green', 'blue']  ", "var colors = (1:'red', 2:'green', 3:'blue')"],
        'posRightAnswer': 2,
        'boolCheckAnswer': false
    },
];

let currentQuestion = 0;
let correctAnswers = 0;
let stopper = false;
let audio_right = new Audio('sounds/right.mp3');
let audio_wrong = new Audio('sounds/wrong.mp3');


function render() {
    document.getElementById('question-amount').innerHTML = cardDeck.length;
    showQuestion();
};

//Content of cardDeck getting rendered to the firstCard
function showQuestion() {
    let question = cardDeck[currentQuestion];
    document.getElementById('question').innerHTML = question['question'];
    for (let i = 0; i < question['answers'].length; i++) {
        j = i + 1;
        document.getElementById('answer' + j).innerHTML = question['answers'][i];
    };
    let current = currentQuestion + 1;
    document.getElementById('question_count').innerHTML = current;
}

//shows the user, if the right or wrong answer is clicked and saves it.
function checkAnswer(n) {
    if (isRightAnswer(n)) {
        document.getElementById('answerbox' + n).classList.add('bg-success');
        correctAnswers++;
        audio_right.play();
    }
    else if (isWrongAnswer()) {
        document.getElementById('answerbox' + n).classList.add('bg-danger');
        document.getElementById('answerbox' + cardDeck[currentQuestion]['posRightAnswer']).classList.add('bg-success');
        audio_wrong.play();
    };
    cardDeck[currentQuestion]['boolCheckAnswer'] = true;
    document.getElementById('button-next').disabled = false;
}

//returns true if the answer is right and checks if a answer is already given.
function isRightAnswer(n){
  return  n == cardDeck[currentQuestion]['posRightAnswer'] && !cardDeck[currentQuestion]['boolCheckAnswer'];
}

// returns true if there is no answer given already.
function isWrongAnswer(){
    return !cardDeck[currentQuestion]['boolCheckAnswer'];
}

//renders the next question question.
function nextQuestion() {
    currentQuestion++;
    lastQuestionCheck();
    let question = cardDeck[currentQuestion];
    document.getElementById('button-next').disabled = true;
    progressbarRender();
    if (!stopper) {
        for (let i = 0; i < question['answers'].length; i++) {
            document.getElementById('answerbox' + i).classList.remove('bg-danger');
            document.getElementById('answerbox' + i).classList.remove('bg-success');
        };
        render();
    };
}

//finds the last question an changes the attribute and name of the last button.
function lastQuestionCheck() {
    if (currentQuestion + 1 == cardDeck.length) {
        document.getElementById('button-next').innerHTML = 'show results';
        document.getElementById('button-next').setAttribute('onclick', 'showResult()');
    }
    else if (currentQuestion == cardDeck.length) {
        stopper = true;
        return stopper;
    }
}

// last card that is rendered. Shows amount of correct answers.
function showResult() {
    currentQuestion++;
    progressbarRender();
    document.getElementById('endscreen').style = '';
    document.getElementById('winpic').style = '';
    document.getElementById('card-body').style = 'display:none;';
    document.getElementById('mainpic').style ='display:none;';
    document.getElementById('question-amount2').innerHTML = cardDeck.length;
    document.getElementById('correct-answer').innerHTML = correctAnswers;
}

// reloads the page so the quiz can be redone.
function restart() {
    location.reload();
}

// renders progressbar to visualize the current progress.
function progressbarRender() {
    let percentage = 100/cardDeck.length;

    let value = currentQuestion * percentage;
    document.getElementById('progressbar').style = `width: ${value}%`;
    document.getElementById('button-next').setAttribute('aria-valuenow', value);
    document.getElementById('progressbar').innerHTML = `${value}%`;
}