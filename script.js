const btn = document.querySelector(".btn")
const input = document.querySelector(".email-input")
const emailInput = document.querySelector(".input-wrapper")

const validateEmail = (email) => {
  var regex = /\S+@\S+\.\S+/;

  return regex.test(email);
};

const checkedEmail = () => {
  const emailValue = input.value;

  if (!validateEmail(emailValue)) {
    emailInput.classList.add("error");
  } else {
    emailInput.classList.remove("error");
  }
}

btn.addEventListener('click',checkedEmail)