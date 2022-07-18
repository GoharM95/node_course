// console.log("starting");

// setTimeout(() => {
//   console.log("2 seconds later");
// }, 2000);

// setTimeout(() => {
//   console.log("0 seconds later");
// }, 0);

// console.log("stopping");

// making an http request

const request = require("request");
const url =
  "http://api.weatherstack.com/current?access_key=a577ff23d3adea839ae8bbd499b3e7d2&query=37.8267,-122.4233&units=f";

request({ url, json: true }, (err, res) => {
  // we can use json: true instead of const data = JSON.parse(res.body);
  console.log(res.body.current);
  const { temperature, feelslike, weather_descriptions } = res.body.current;
  console.log(
    `${weather_descriptions[0]}. It is currently ${temperature} degrees, but feels like ${feelslike} degrees out`
  );
});
