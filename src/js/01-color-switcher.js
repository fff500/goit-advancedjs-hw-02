import { getRandomHexColor } from './helpers';

const elements = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

elements.stopBtn.setAttribute('disabled', true);
elements.startBtn.addEventListener('click', startColorChange);
elements.stopBtn.addEventListener('click', stopColorChange);

let intervalId;

function startColorChange() {
  intervalId = setInterval(() => {
    elements.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  elements.stopBtn.removeAttribute('disabled');
  elements.startBtn.setAttribute('disabled', true);
}

function stopColorChange() {
  clearInterval(intervalId);
  elements.startBtn.removeAttribute('disabled');
  elements.stopBtn.setAttribute('disabled', true);
}
