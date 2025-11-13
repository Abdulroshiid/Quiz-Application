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
