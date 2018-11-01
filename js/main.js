const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const pCode = document.getElementById('pCode');
const password = document.getElementById('pwd');
const submit = document.getElementById('submit');
const error = document.getElementById('error_msg');

const emailPattern = new RegExp("@");
const phonePattern = /^\+[0-9]{6,13}/;
const postalPattern = /[0-9]{5}/;

let isValid = () => {
  if (firstname.value.length < 1) return false;
  if (lastname.value.length < 1) return false;
  if (!emailPattern.test(email.value)) return false;
  if (!phonePattern.test(phone.value)) return false;
  if (pCode.value && !postalPattern.test(pCode.value)) return false;
  if (password.value.length < 1) return false;
  return true;
};

submit.addEventListener('click', (e) => {
  if (isValid()) {
    console.log("form valid");
  } else {
    error.style.display = "block";
    e.preventDefault();
  }
});