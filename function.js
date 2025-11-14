const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: 0,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Earth", "Jupiter", "Venus"],
    answer: 0,
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
    question: "In what year did Nigeria gain independence?",
    options: ["1963", "1957", "1960", "1970"],
    answer: 2,
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["O2", "NaCl", "CO2", "H2O"],
    answer: 3,
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    options: ["Lion", "Tiger", "Elephant", "Bear"],
    answer: 0,
  },
  {
    question: "What process do plants use to make their food?",
    options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
    answer: 1,
  },
];

const questionText = document.querySelector(".questions");
const questionNumber = document.querySelector(".questionNum");
const optionsBox = document.querySelector(".answer-box");

const secondsTimer = document.querySelector(".timer");
const nextButton = document.querySelector(".nextButton");

let seconds;
let currentQuestionIndex = 0;
let timerInterval;

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
        <input type="radio" name="myRadioGroup" id="opt${index}">
        <label for="opt${index}">${option}</label>
      </div>
    `;
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
  goToNextQuestion();
});

function goToNextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    clearInterval(timerInterval);
    alert("Quiz Completed!");
  }
}
loadQuestion();
