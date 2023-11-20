import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

import 'flatpickr/dist/flatpickr.min.css';
import 'izitoast/dist/css/iziToast.min.css';

import { convertMs, addLeadingZero } from './helpers';

const elements = {
  startBtn: document.querySelector('[data-start]'),
  dateInput: document.querySelector('#datetime-picker'),
  daysSpan: document.querySelector('[data-days]'),
  hoursSpan: document.querySelector('[data-hours]'),
  minutesSpan: document.querySelector('[data-minutes]'),
  secondsSpan: document.querySelector('[data-seconds]'),
};

let selectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      iziToast.show({
        message: 'Please choose a date in the future',
        color: 'red',
      });
      return;
    }

    elements.startBtn.removeAttribute('disabled');
    selectedDate = selectedDates[0];
  },
};

let flatpickrInstance = flatpickr('#datetime-picker', options);

elements.startBtn.setAttribute('disabled', true);
elements.startBtn.addEventListener('click', startCountdown);

function startCountdown() {
  elements.startBtn.setAttribute('disabled', true);
  elements.dateInput.setAttribute('disabled', true);
  flatpickrInstance.destroy();
  const intervalId = setInterval(() => {
    const { days, hours, minutes, seconds } = convertMs(
      selectedDate - Date.now()
    );
    elements.daysSpan.textContent = addLeadingZero(days);
    elements.hoursSpan.textContent = addLeadingZero(hours);
    elements.minutesSpan.textContent = addLeadingZero(minutes);
    elements.secondsSpan.textContent = addLeadingZero(seconds);

    if (selectedDate - Date.now() <= 0) {
      elements.startBtn.removeAttribute('disabled');
      elements.dateInput.removeAttribute('disabled');
      flatpickrInstance = flatpickr('#datetime-picker', options);
      clearInterval(intervalId);
      elements.daysSpan.textContent = '00';
      elements.hoursSpan.textContent = '00';
      elements.minutesSpan.textContent = '00';
      elements.secondsSpan.textContent = '00';
    }
  }, 1000);
}
