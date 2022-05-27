let cardDeck = [
    {
        'question': "Inside which HTML element do we put the JavaScript?",
        'answers': ["&lt;java&gt;", "&lt;theScript&gt;", "&lt;script&gt;", "&lt;javascript&gt;"],
        'posRightAnswer': 2
    },
    {
        'question': "How does a FOR loop start?",
        'answers': ["for (let i=0 ; i&lt;10 ; i++", "for i&lt;10", "for (i=0 ; i&lt;10) ", "for (let i =0 ; i++)"],
        'posRightAnswer': 0
    },
    {
        'question': "Which event occurs when the user clicks on an HTML element?",
        'answers': ["onmouseover", "onchange", "onclick", "onmouseclick"],
        'posRightAnswer': 2
    },
    {
        'question': "Which operator is used to assign a value to a variable?",
        'answers': ["x", "-", "+", "="],
        'posRightAnswer': 3
    }, {
        'question': "What is the correct way to write a JavaScript array?",
        'answers': ["var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = 'red', 'green', 'blue'", "var colors = ['red', 'green', 'blue']  ", "var colors = (1:'red', 2:'green', 3:'blue')"],
        'posRightAnswer': 2
    },
];

let currentQuestion = 0;

function render(){
document.getElementById('question_amount').innerHTML =cardDeck.length;
showQuestion();
};

function showQuestion (){
let question = cardDeck[currentQuestion];
document.getElementById('question').innerHTML =question['question'];
for (let i = 0; i < question['answers'].length; i++) {
    const element = question['answers'][i];
    j=i+1;
    document.getElementById('answer'+j).innerHTML =question['answers'][i];
}


     
     
     
 
}