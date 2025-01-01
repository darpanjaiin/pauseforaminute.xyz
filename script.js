document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.getElementById('timer');
    let timeLeft = 60;
    let timerInterval;

    function updateTimer() {
        if (timeLeft <= 0) {
            timerDisplay.textContent = "00:00";
            clearInterval(timerInterval);
            return;
        }

        timerDisplay.textContent = `00:${timeLeft.toString().padStart(2, '0')}`;
        timeLeft--;
    }

    // Start the timer with a 1-second interval
    timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call to avoid delay
}); 