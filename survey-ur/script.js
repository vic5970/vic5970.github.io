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
question: "1 لاکھ روپے جیتنا آپ کی زندگی بدل سکتا ہے۔ اس موقع کے بارے میں آپ کو سب سے زیادہ کیا جوش دلاتا ہے؟",
answers: [
    "یہ میرے خاندان اور پیاروں کی مدد کرے گا۔",
    "میں اپنے خواب اور خواہشات کو پورا کر سکتا ہوں۔",
    "یہ اللہ کی طرف سے ایک نعمت ہے۔",
    "یہ میری زندگی کو بہتر بنانے کا ایک نایاب موقع ہے۔"
]
},
{
question: "اگر آپ آج جیت گئے، تو انعامی رقم کا سب سے پہلے کیا کریں گے؟",
answers: [
    "قرض یا ادھار کو ادا کروں گا۔",
    "اپنے بچوں کی تعلیم اور مستقبل میں سرمایہ کاری کروں گا۔",
    "ہنگامی حالات اور اہم ضروریات کے لیے بچت کروں گا۔",
    "ضرورت مندوں کو عطیہ کروں گا اور اللہ کی برکت حاصل کروں گا۔"
]
},
{
question: "1 لاکھ روپے جیتنے کا موقع حاصل کرنے کے لیے آپ کتنے پرجوش ہیں؟",
answers: [
    "بہت زیادہ پرجوش ہوں – میں یہ موقع لینے کے لیے تیار ہوں!",
    "پرجوش ہوں – یہ ایک حیرت انگیز موقع لگتا ہے۔",
    "انتہائی پرجوش ہوں – یہ میرا لمحہ ہو سکتا ہے!",
    "بالکل یقین ہے – میں اللہ اور اپنی قسمت پر بھروسہ کرتا ہوں!"
]
},
{
question: "آپ کو اس مقابلے میں جیتنے کے لیے سب سے زیادہ کس چیز نے متحرک کیا؟",
answers: [
    "اپنے خاندان کی زندگی کو بہتر بنانے کا موقع۔",
    "اپنے خوابوں اور ذاتی مقاصد کو حاصل کرنا۔",
    "یہ زندگی بدل دینے والی نعمت اور موقع ہے۔",
    "جیتنا اللہ کی برکت کی نشانی ہوگی۔"
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