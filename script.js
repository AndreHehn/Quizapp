let cardDeck = [
    {
        'question': "Inside which HTML element do we put the JavaScript?",
        'answers': ["&lt;java&gt;", "&lt;theScript&gt;", "&lt;script&gt;", "&lt;javascript&gt;"],
        'posRightAnswer': 2,
        'boolCheckAnswer': false
    },
    {
        'question': "How does a FOR loop start?",
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

function render() {
    document.getElementById('question-amount').innerHTML = cardDeck.length;
    showQuestion();
};


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


function checkAnswer(n) {
    if (n == cardDeck[currentQuestion]['posRightAnswer'] && !cardDeck[currentQuestion]['boolCheckAnswer']) {
        document.getElementById('answerbox' + n).classList.add('bg-success');
        correctAnswers++;
    }
    else if (!cardDeck[currentQuestion]['boolCheckAnswer']) {
        document.getElementById('answerbox' + n).classList.add('bg-danger');
        document.getElementById('answerbox' + cardDeck[currentQuestion]['posRightAnswer']).classList.add('bg-success');
    };
    cardDeck[currentQuestion]['boolCheckAnswer'] = true;
    document.getElementById('button-next').disabled = false;
}


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


function showResult() {
    currentQuestion++;
    progressbarRender();
    document.getElementById('endscreen').style = '';
    document.getElementById('card-body').style = 'display:none;';
    document.getElementById('question-amount2').innerHTML = cardDeck.length;
    document.getElementById('correct-answer').innerHTML = correctAnswers;

}


function restart() {
    location.reload();
}


function progressbarRender() {
    console.log(currentQuestion);
    let value = currentQuestion * 20;
    document.getElementById('progressbar').style = `width: ${value}%`;
    document.getElementById('button-next').setAttribute('aria-valuenow', value);
    document.getElementById('progressbar').innerHTML = `${value}%`;
}