const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Earth", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "What color do you get when you mix red and blue?",
    options: ["Green", "Purple", "Orange", "Yellow"],
    answer: "Purple",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
    answer: "Blue Whale",
  },
  {
    question: "What is the fastest land animal?",
    options: ["Cheetah", "Lion", "Horse", "Leopard"],
    answer: "Cheetah",
  },
  {
    question: "What is the primary source of energy for Earth?",
    options: ["The Moon", "The Sun", "Fire", "Wind"],
    answer: "The Sun",
  },
  {
    question: "Which device is used to measure temperature?",
    options: ["Thermometer", "Barometer", "Speedometer", "Compass"],
    answer: "Thermometer",
  },
  {
    question: "Which is the smallest continent?",
    options: ["Europe", "Australia", "Antarctica", "South America"],
    answer: "Australia",
  },
  {
    question: "What is the longest river in the world?",
    options: [
      "Nile River",
      "Amazon River",
      "Mississippi River",
      "Yangtze River",
    ],
    answer: "Nile River",
  },
  {
    question: "Who invented the light bulb?",
    options: [
      "Thomas Edison",
      "Albert Einstein",
      "Isaac Newton",
      "Nikola Tesla",
    ],
    answer: "Thomas Edison",
  },
  {
    question: "In what year did Nigeria gain independence?",
    options: ["1960", "1957", "1963", "1970"],
    answer: "1960",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["O2", "H2O", "CO2", "NaCl"],
    answer: "H2O",
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    options: ["Lion", "Tiger", "Elephant", "Bear"],
    answer: "Lion",
  },
  {
    question: "What process do plants use to make their food?",
    options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
    answer: "Photosynthesis",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Pacific Ocean",
      "Indian Ocean",
      "Arctic Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Dollar", "Yen", "Euro", "Won"],
    answer: "Yen",
  },
  {
    question: "Which programming language is used for web interactivity?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "JavaScript",
  },
  {
    question: "On which continent is the Sahara Desert located?",
    options: ["Asia", "Africa", "Australia", "North America"],
    answer: "Africa",
  },
  {
    question: "Which instrument is used to look at stars?",
    options: ["Telescope", "Microscope", "Binoculars", "Periscope"],
    answer: "Telescope",
  },
  {
    question: "Which is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    answer: "Jupiter",
  },
];

const secondsTimer = document.querySelector(".timer");

let seconds = 15;

const timeInterval = setInterval(() => {
  seconds--;
  const paddedSeconds = seconds.toString().padStart(2, "0");
  secondsTimer.textContent = paddedSeconds;
  if (seconds === 0) {
    clearInterval(timeInterval);
  }
}, 1000);
