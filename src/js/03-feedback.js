import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

populateFormOutput();

function onFormSubmit(evt) {
  evt.preventDefault();

  if (!email.value) return console.log('Введите ваш email');
  if (!message.value) return console.log('Напишите ваш отзыв');

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput() {
  const formInput = { email: email.value, message: message.value };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formInput));
}

function populateFormOutput() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    email.value = JSON.parse(savedMessage).email;
    message.value = JSON.parse(savedMessage).message;
  }
}
