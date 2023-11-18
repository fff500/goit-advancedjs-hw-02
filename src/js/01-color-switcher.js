function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

let intervalId;

elements.startBtn.addEventListener('click', startColorChange);
elements.stopBtn.addEventListener('click', stopColorChange);

function startColorChange() {
  intervalId = setInterval(() => {
    elements.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  elements.startBtn.setAttribute('disabled', true);
}

function stopColorChange() {
  clearInterval(intervalId);
  elements.startBtn.removeAttribute('disabled', false);
}
