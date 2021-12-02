setInterval(rotateClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function rotateClock() {
    const now = new Date();
    const second = now.getSeconds() / 60;
    const minute = (second + now.getMinutes()) / 60;
    const hour = (minute + now.getHours()) / 12;
    setRotation(secondHand, second);
    setRotation(minuteHand, minute);
    setRotation(hourHand, hour);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

rotateClock();