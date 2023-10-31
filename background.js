chrome.runtime.onInstalled.addListener(function() {
    chrome.alarms.create('myAlarm', { periodInMinutes: 1 });
});

chrome.alarms.onAlarm.addListener(function(alarm) {
    if (alarm.name === 'myAlarm') {
        console.log('Alarm just fired!');
    }
});
