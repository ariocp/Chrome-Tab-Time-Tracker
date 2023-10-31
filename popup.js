let startTime = 0;
let isTracking = false;
let timerInterval;

function startTracking() {
    if (!isTracking) {
        startTime = Date.now();
        isTracking = true;
        timerInterval = setInterval(updateTime, 1000);
    }
}

function stopTracking() {
    if (isTracking) {
        clearInterval(timerInterval);
        const endTime = Date.now();
        const elapsedTime = Math.floor((endTime - startTime) / 1000);
        console.log(`Прошло времени: ${elapsedTime} секунд`);
        isTracking = false;
    }
}

function updateTime() {
    const currentTime = Date.now();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000);
    const timeDisplay = document.getElementById("timeDisplay");
    timeDisplay.textContent = `Прошло времени: ${elapsedTime} секунд`;
}

document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startTracking");
    const stopButton = document.getElementById("stopTracking");

    startButton.addEventListener("click", function() {
        startTracking();
    });

    stopButton.addEventListener("click", function() {
        stopTracking();
    });
});
