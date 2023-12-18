    let timer;
    let seconds = 0;

    function startTimer() {
      timer = setInterval(updateTimer, 1000);
    }

    function stopTimer() {
      clearInterval(timer);
    }

    function resetTimer() {
      stopTimer();
      seconds = 0;
      updateTimerDisplay();
    }

    function updateTimer() {
      seconds++;
      updateTimerDisplay();
    }

    function updateTimerDisplay() {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;

      const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
      document.getElementById('timer').textContent = formattedTime;
    }
    function pad(value) {
        return value < 10 ? `0${value}` : value;
      }
  
      document.getElementById('startButton').addEventListener('click', startTimer);
      document.getElementById('resetButton').addEventListener('click', resetTimer);