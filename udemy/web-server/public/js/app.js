console.log("js");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch(`http://localhost:3000/weather?address=${location}`).then((res) => {
    res.json().then((data) => {
      const { error, location, forecast } = data;
      if (error) {
        messageOne.textContent = error;
        // console.log(error);
      } else {
        messageOne.textContent = location;
        messageTwo.textContent = forecast;
        // console.log(location);
        // console.log(forecast);
      }
    });
  });
});
