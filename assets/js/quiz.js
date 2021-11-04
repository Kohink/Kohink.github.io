const quizData = [
    {
        question: "How many hearts does an octopus have?",
        a: "12",
        b: "6",
        c: "3",
        d: "2",
        correct: "c",
    },
    {
        question: "What is my dogs name?",
        a: "Doak",
        b: "Rex",
        c: "Theo",
        d: "Tobi",
        correct: "c",
    },
    {
        question: "Which animal cannot jump?",
        a: "Dogs",
        b: "Elephants",
        c: "Spiders",
        d: "Polar Bears",
        correct: "b",
    },
    {
        question: "Where did I graduate from?",
        a: "Florida State University",
        b: "Harvard",
        c: "University of Florida",
        d: "Hogwarts",
        correct: "a",
    },
    {
        question: "What year was C++ launched?",
        a: "1985",
        b: "1996",
        c: "1980",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "What is my favorite band of all time?",
        a: "Cage the Elephant",
        b: "Weezer",
        c: "Linkin Park",
        d: "The Strokes",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hit The Mother Load",
        c: "How I Met Your Mother",
        d: "How To Make Lemonade",
        correct: "a",
    },
    {
        question: "What year was I born?",
        a: "1997",
        b: "1999 (the best year)",
        c: "2000",
        d: "2001",
        correct: "b",
    },
    {
        question: "Who does Jim marry in The Office?",
        a: "Angela",
        b: "Pam",
        c: "Kevin",
        d: "Dwight",
        correct: "b",
    },
    {
        question: "Where is my family from?",
        a: "London",
        b: "Nepal",
        c: "Indonesia",
        d: "Kenya",
        correct: "d",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
shuffleArray(quizData);

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});