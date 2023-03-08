

let second = 0;
let countDown;
let timerStart;
let newSecond;
let disableBtn;

const startTimer = () => {

    timerStart = document.getElementById('second');

    countDown = setInterval(() => {
        newSecond = ++second;
        timerStart.innerHTML = newSecond;
    }, 1000)

    disableStartBtn();

}


// Start Button
document.getElementById('start-btn').addEventListener('click', function () {

    startTimer(countDown);


});


// Stop Button
document.getElementById('stop-btn').addEventListener('click', function () {

    clearInterval(countDown);
    timerStart.innerText = newSecond;
    enableStartBtn();


})


// Reset Button
document.getElementById('reset-btn').addEventListener('click', function () {
    clearInterval(countDown);
    second = 0
    timerStart.innerText = second;
    enableStartBtn();
})


// Start Button Disable & Enable Funtion
function disableStartBtn() {
    disableBtn = document.getElementById('start-btn');
    disableBtn.disabled = true;
    disableBtn.style.backgroundColor = 'gray';
    disableBtn.style.color = 'white';

}

function enableStartBtn() {
    disableBtn = document.getElementById('start-btn');
    disableBtn.disabled = false;
    disableBtn.style.backgroundColor = 'rgb(0, 197, 10)';
    disableBtn.style.color = 'white';

}