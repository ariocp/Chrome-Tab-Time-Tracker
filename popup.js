document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startTracking");
    const stopButton = document.getElementById("stopTracking");

    startButton.addEventListener("click", function () {
        chrome.runtime.sendMessage('start');
    });

    stopButton.addEventListener("click", function () {
        chrome.runtime.sendMessage('stop');
    });
});
