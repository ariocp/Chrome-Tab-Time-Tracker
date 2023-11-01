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
    chrome.action.setBadgeText({ text: `${elapsedTime}` });
}

chrome.tabs.onActivated.addListener(function (activeInfo) {
    stopTracking();
    startTracking();
});

chrome.runtime.onMessage.addListener(function (message) {
    if (message === 'start') {
        startTracking();
    } else if (message === 'stop') {
        stopTracking();
    }
});

chrome.runtime.onInstalled.addListener(function () {
    chrome.action.setBadgeText({ text: '' });
});
