const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const DELAY = 1000;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    starBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    bodyStyle: document.querySelector('body'),
};

refs.starBtn.addEventListener('click', (e) => {
    e.target.disabled = true;
    randomColor()
});

refs.stopBtn.addEventListener('click', (e) => {
    refs.starBtn.disabled = false;
    clearInterval(interval);

} )

function setBodyColor(colors) {
    refs.bodyStyle.style.backgroundColor = colors;
    
};

const interval = setInterval(randomColor, DELAY, DELAY);

function randomColor() {
    let randomNum = randomIntegerFromInterval(1, 6);
    let newColor = colors.map((col, index) => {
        if (randomNum === index) {
            setBodyColor(col);
        }
    })
    return newColor;
}
