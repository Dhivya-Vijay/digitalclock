const formatButton = document.getElementById('formatButton');
const clockContainer = document.getElementById('clockContainer');
const clockDisplay = document.getElementById('clockDisplay');

let is12HourFormat = true;

function updateTime() {
    const now = new Date();
    const options = {
        hour12: is12HourFormat,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
            };
    clockDisplay.textContent = now.toLocaleTimeString([], options);
}

formatButton.addEventListener('click', () => {
    is12HourFormat = !is12HourFormat;
    formatButton.textContent = is12HourFormat ? 'Select 12-Hour Format' : 'Select 24-Hour Format';
    clockContainer.style.display = 'block';
    updateTime();
    setInterval(updateTime, 1000);
});

