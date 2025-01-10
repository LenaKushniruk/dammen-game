document.getElementById('startButton').addEventListener('click', startTimer);

function startTimer() {
  const timerDisplay = document.getElementById('timer');
  let timeInSeconds = 12 * 60; // 12 minutes in seconds

  const interval = setInterval(() => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    // Update the timer display
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Stop the timer when it reaches 0
    if (timeInSeconds <= 0) {
      clearInterval(interval);
      alert('Tijd is om!');
    }

    timeInSeconds--;
  }, 1000);
}
