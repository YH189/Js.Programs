const checkbox = document.getElementById("checkit");
const visabtn = document.getElementById("visabtn");
const mastercard = document.getElementById("mastercard");
const submit = document.getElementById("submit");
const Paypl = document.getElementById("Paypal");
const subresult = document.getElementById("subresult");
const submitbtn = document.getElementById("submitbtn");
submit.onclick = function () {
  if (checkbox.checked) {
    subresult.textContent = `You are subscribed`;
  } else {
    subresult.textContent = `Please subscribe first!`;
  }
  if (visabtn.checked) {
    submitbtn.textContent = `Payment by Visa`;
  } else if (mastercard.checked) {
    submitbtn.textContent = `Payment by mastercard`;
  } else if (Paypl.checked) {
    submitbtn.textContent = `Payment by Paypal`;
  } else {
    submitbtn.textContent = `Choose any of this Card payment!`;
  }
};
