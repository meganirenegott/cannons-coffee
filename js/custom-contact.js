// get boilerplate code from slides
let form = document.querySelector("form");

function onFormSubmit() {
  event.preventDefault();
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());
  let thankYou = document.getElementById("#thankYouMessage");
  thankYou.textContent = ` Thank you ${dataObject.name}! We appreciate your interest in ${dataObject.coffeeOrJob}. Your favorite coffee flavor is ${dataObject.faveCoffee} and your comments are ${dataObject.comments}. We will soon contact you at ${dataObject.email} or ${dataObject.phone}.`;
  form.style.display = "none";
}
form.addEventListener("submit", onFormSubmit);
