window.addEventListener('DOMContentLoaded', init);
const name=document.querySelector('#name');
const email = document.querySelector('#email');
const zipCode = document.querySelector('#zipcode');


function init() {
 bindEvents();
}

function validateName() {
  const nameRegex = /^[a-zA-Z]{2,10}$/
  if(!nameRegex.test(name.value)){
    name.classList.add('invalid');
  }else {
    name.classList.remove('invalid');
  }
}


function validateEmail() {
  const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if(!emailRegex.test(email.value)){
    email.classList.add('invalid');
  }else {
    email.classList.remove('invalid');
  }
}


function validateZipCode() {
  const zipRegex = /^[0-9]{5}(-[0-9]{4})?$/;
  if(!zipRegex.test(zipCode.value)){
    zipCode.classList.add('invalid');
  }else {
    zipCode.classList.remove('invalid');
  }
}

function bindEvents() {
  name.addEventListener('blur', validateName);
  email.addEventListener('blur',validateEmail);
  zipCode.addEventListener('blur', validateZipCode);
}
