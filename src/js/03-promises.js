import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const formDataObj = {};

  for (let [key, value] of formData.entries()) {
    formDataObj[key] = Number(value);
  }

  const { delay, step, amount } = formDataObj;

  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, delay + i * step)
      .then(({ position, delay }) => {
        iziToast.success({
          message: `✅ Fulfilled promise ${position} in ${delay}ms`,
          color: 'green',
        });
      })
      .catch(({ position, delay }) => {
        iziToast.error({
          message: `❌ Rejected promise ${position} in ${delay}ms`,
          color: 'red',
        });
      });
  }

  form.reset();
}
