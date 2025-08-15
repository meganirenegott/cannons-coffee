// get boilerplate code from slides
let form = document.querySelector("form");

function onFormSubmit() {
  event.preventDefault();
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());
  console.log(dataObject);
  let welcome = document.getElementById("#welcomeMessage");
  welcome.textContent = `"Welcome, ${dataObject.name}! You are logged in!"`;
  form.style.display = "none";
}
form.addEventListener("submit", onFormSubmit);
