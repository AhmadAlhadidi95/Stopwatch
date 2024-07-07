let display = document.querySelector(".main-box strong");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRuuuing = false;

function start() {

    if (!isRuuuing) {
        
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRuuuing = true;

    };

};

function stop() {

    if (isRuuuing) {

        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRuuuing = false;

    };

};

function reset() {

    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRuuuing = false;

    display.textContent = `00:00:00:00`;

};

function update() {

    let currentTime = Date.now();

    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let miliSeconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliSeconds = String(miliSeconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${miliSeconds}`;

};