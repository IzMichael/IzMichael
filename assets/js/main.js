var questions = [
    {"question":"7 + 4","answer":"11"},
    {"question":"9 + 3","answer":"12"},
    {"question":"7 + 8","answer":"15"},
    {"question":"2 + 3","answer":"5"},
    {"question":"5 + 3","answer":"8"},
    {"question":"11 + 4","answer":"15"},
    {"question":"6 + 8","answer":"12"}
]
var set = questions[Math.floor(Math.random() * questions.length)];
var question = set.question;
var answer = set.answer;

var nbox = document.getElementById('name');
var ebox = document.getElementById('email');
var sbox = document.getElementById('subject');
var mbox = document.getElementById('message');

var qbox = document.getElementById('botQ');
var abox = document.getElementById('botAns');

qbox.innerHTML += question + '?';

function run() {
    if (nbox.value === '') {
        pulse(nbox);
    }
    if (ebox.value === '') {
        pulse(ebox);
    }
    if (sbox.value === '') {
        pulse(sbox);
    }
    if (mbox.value === '') {
        pulse(mbox);
    }
    if (abox.value === answer) {
        document.theForm.submit();
    } else {
        pulse(abox);
    }
}

async function pulse(el) {
    el.classList.add('incorrect')
    await sleep(3)
    el.classList.remove('incorrect')
}

document.getElementById('form').addEventListener("keydown", function (e) {
    if (e.key === 'Enter') {
    run();
    }
});

function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, (s * 1000)));
}