const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: 0,
  },
  {
    question: "What is the largest land animal on Earth?",
    options: ["Rhinoceros", "Giraffe", "Elephant", "Hippopotamus"],
    answer: 2,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Earth", "Jupiter", "Venus"],
    answer: 0,
  },
  {
    question: "Which is the smallest continent?",
    options: ["Europe", "Africa", "Antarctica", "Australia"],
    answer: 3,
  },
  {
    question: "What color do you get when you mix red and blue?",
    options: ["Green", "Purple", "Orange", "Yellow"],
    answer: 1,
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
    answer: 1,
  },
  {
    question: "What is the primary source of energy for Earth?",
    options: ["The Moon", "The Sun", "Fire", "Wind"],
    answer: 1,
  },
  {
    question: "What is the fastest land animal?",
    options: ["Cheetah", "Lion", "Horse", "Leopard"],
    answer: 0,
  },
  {
    question: "Who invented the light bulb?",
    options: [
      "Thomas Edison",
      "Albert Einstein",
      "Isaac Newton",
      "Nikola Tesla",
    ],
    answer: 1,
  },
  {
    question:
      "Which fashion accessory is a long, often rectangular piece of fabric worn around the neck or head?",
    options: ["Glove", "Shawl", "Scarf", "Cufflink"],
    answer: 2,
  },
  {
    question: "In what year did Nigeria gain independence?",
    options: ["1963", "1957", "1960", "1970"],
    answer: 2,
  },
  {
    question: "How many legs does an insect typically have?",
    options: ["Eight", "Nine", "Four", "Six"],
    answer: 3,
  },
  {
    question: "Which device is used to measure temperature?",
    options: ["Thermometer", "Barometer", "Speedometer", "Compass"],
    answer: 0,
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["O2", "NaCl", "CO2", "H2O"],
    answer: 3,
  },
  {
    question:
      "What is the standard minimum number of players on a soccer (football) team?",
    options: ["10", "9", "11", "12"],
    answer: 2,
  },
  {
    question:
      "What term describes a globally unique address used to identify a device on the internet or a local network?",
    options: ["IP Address", "Tracker ID", "Location", "Phone Number"],
    answer: 1,
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    options: ["Lion", "Tiger", "Elephant", "Bear"],
    answer: 0,
  },
  {
    question: "Who was the first person to walk on the Moon?",
    options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"],
    answer: 2,
  },
  {
    question: "What process do plants use to make their food?",
    options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
    answer: 1,
  },
  {
    question:
      "Which popular hobby involves shaping, firing, and glazing clay to create pottery or sculptures?",
    options: ["Pottery", "Calligraphy", "Weaving", "Water Aerobics"],
    answer: 0,
  },
];

const questionText = document.querySelector(".questions");
const questionNumber = document.querySelector(".questionNum");
const optionsBox = document.querySelector(".answer-box");
const resultScreen = document.querySelector(".result-screen");
const quizScreen = document.querySelector(".main-body");
const finalScoreText = document.querySelector(".final-score");
const finalPercentageText = document.querySelector(".final-percentage");
const answerReviewBox = document.querySelector(".answer-review");
const restartBtn = document.querySelector(".restart-btn");
const secondsTimer = document.querySelector(".timer");
const nextButton = document.querySelector(".nextButton");

let radioButtons;
let seconds;
let currentQuestionIndex = 0;
let timerInterval;
let selectedAnswerIndex = null;
let userAnswers = [];
let score = 0;

function loadQuestion() {
  // Get the current question object

  const current = questions[currentQuestionIndex];

  // Update question text and number

  questionText.textContent = current.question;
  questionNumber.textContent = currentQuestionIndex + 1;

  // Clear old options

  optionsBox.innerHTML = "";

  // Add new options

  current.options.forEach((option, index) => {
    optionsBox.innerHTML += `
      <div class="input-box">
        <input type="radio" name="myRadioGroup" id="option${index}">
        <label for="option${index}">${option}</label>
      </div>
    `;
  });

  // Check the radio button the user choosed
  radioButtons = document.querySelectorAll("input[name='myRadioGroup']");

  radioButtons.forEach((radio, index) => {
    radio.addEventListener("change", () => {
      selectedAnswerIndex = index; // Save which option the user selected
    });
  });

  // Reset & restart timer

  resetTimer();
}

function resetTimer() {
  clearInterval(timerInterval);
  seconds = 15;
  secondsTimer.textContent = "15";

  timerInterval = setInterval(() => {
    seconds--;
    secondsTimer.textContent = seconds.toString().padStart(2, "0");

    if (seconds === 0) {
      clearInterval(timerInterval);
      goToNextQuestion();
    }
  }, 1000);
}

nextButton.addEventListener("click", () => {
  checkAnswer();
  goToNextQuestion();
  selectedAnswerIndex = null;
});

function goToNextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function checkAnswer() {
  const correctIndex = questions[currentQuestionIndex].answer;

  // Save user selection (optional)
  userAnswers.push({
    question: questions[currentQuestionIndex].question,
    options: questions[currentQuestionIndex].options,
    selected: selectedAnswerIndex,
    correct: correctIndex,
  });

  // Score increase
  if (selectedAnswerIndex === correctIndex) {
    score++;
  }
}

function showResults() {
  // Stop timer
  clearInterval(timerInterval);

  // Hide quiz and show results
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  // Show raw score
  finalScoreText.textContent = `Score: ${score} / ${questions.length}`;

  // Show percentage
  const percentage = Math.round((score / questions.length) * 100);
  finalPercentageText.textContent = `Percentage: ${percentage}%`;

  // Build the answer summa ry
  answerReviewBox.innerHTML = "";

  userAnswers.forEach((item, index) => {
    const userAnswer = item.options[item.selected];
    const correctAnswer = item.options[item.correct];

    const isCorrect = item.selected === item.correct;

    const block = document.createElement("div");
    block.classList.add("review-block");

    block.innerHTML = `
      <h4>Q${index + 1}: ${item.question}</h4>
      <p><strong>Your answer:</strong> 
         <span style="color:${isCorrect ? "green" : "red"};">
            ${userAnswer ?? "No answer"}
         </span>
      </p>
      <p><strong>Correct answer:</strong> ${correctAnswer}</p>
      <hr />
    `;

    answerReviewBox.appendChild(block);
  });
}
restartBtn.addEventListener("click", () => {
  // Reset everything
  score = 0;
  currentQuestionIndex = 0;
  selectedAnswerIndex = null;
  userAnswers = [];

  // Hide result and show quiz UI
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  // Restart quiz
  loadQuestion();
});

loadQuestion();
