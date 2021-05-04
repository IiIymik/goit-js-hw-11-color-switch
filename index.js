const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const DELAY = 1000;
let interval = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    starBtnEl: document.querySelector('[data-action="start"]'),
    stopBtnEl: document.querySelector('[data-action="stop"]'),
    bodyEl: document.querySelector('body'),
};

refs.starBtnEl.addEventListener('click', startBtn);

function startBtn() {
     refs.starBtnEl.disabled = true;
    interval = setInterval(randomColor, DELAY);
};

refs.stopBtnEl.addEventListener('click', stopBtn);

function stopBtn() {
    refs.starBtnEl.disabled = false;
    clearInterval(interval);
};

function setBodyColor(colors) {
    refs.bodyEl.style.backgroundColor = colors;
};

function randomColor() {
    let randomNum = randomIntegerFromInterval(1, colors.length -1);
    setBodyColor(colors[randomNum]);    
};
