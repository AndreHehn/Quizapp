let cardDeck = [
    {
        'question': "Inside which HTML element do we put the JavaScript?",
        'answers': ["&lt;java&gt;", "&lt;theScript&gt;", "&lt;script&gt;", "&lt;javascript&gt;"],
        'posRightAnswer': 2,
        'boolCheckAnswer': false
    },
    {
        'question': "How does a FOR loop start?",
        'answers': ["for (let i=0 ; i&lt;10 ; i++", "for i&lt;10", "for (i=0 ; i&lt;10) ", "for (let i =0 ; i++)"],
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

function render() {
    document.getElementById('question_amount').innerHTML = cardDeck.length;
    showQuestion();
};

function showQuestion() {
    let question = cardDeck[currentQuestion];
    document.getElementById('question').innerHTML = question['question'];
    for (let i = 0; i < question['answers'].length; i++) {
        j = i + 1;
        document.getElementById('answer' + j).innerHTML = question['answers'][i];
    };
}

function checkAnswer(n){

    if( n == cardDeck[currentQuestion]['posRightAnswer'] && !cardDeck[currentQuestion]['boolCheckAnswer'] ){
       document.getElementById('answerbox'+n).classList.add('bg-success');
       
    }
    else if (!cardDeck[currentQuestion]['boolCheckAnswer'] ){
        document.getElementById('answerbox'+n).classList.add('bg-danger');
        document.getElementById('answerbox'+cardDeck[currentQuestion]['posRightAnswer']).classList.add('bg-success');
    };
    cardDeck[currentQuestion]['boolCheckAnswer']= true;
}