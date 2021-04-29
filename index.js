const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    starBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    bodyStyle: document.querySelector('body'),
};

function setBodyColor(colors) {
    refs.bodyStyle.style.backgroundColor = colors;
};

function randomColor() {
    let randomNum = randomIntegerFromInterval(1, 6);
    return colors.map((col, index) => {
        if (randomNum === index) {
            setBodyColor(col);
        }
    })
};

randomColor();
