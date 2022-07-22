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
// const url =
//   "http://api.weatherstack.com/current?access_key=a577ff23d3adea839ae8bbd499b3e7d2&query=37.8267,-122.4233&units=f";

// request({ url, json: true }, (err, res) => {
//   // we can use json: true instead of const data = JSON.parse(res.body);
//   if (err) {
//     // turn off wi-fi to get an error
//     console.log("Unable to connect to weather service!");
//   } else if (res.body.error) {
//     // remove query value from the link
//     console.log("Unable to find location!");
//   } else {
//     const { temperature, feelslike, weather_descriptions } = res.body.current;
//     console.log(
//       `${weather_descriptions[0]}. It is currently ${temperature} degrees, but feels like ${feelslike} degrees out`
//     );
//   }
// });

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/georgia.json?types=country&access_token=pk.eyJ1IjoiZ29oYW0iLCJhIjoiY2w1dHJlZTFwMGswMzNwcDNvOHAyZXdrdyJ9.CUPRR7g3iQX1O2bGRumeuQ";

request({ url: geocodeURL, json: true }, (err, res) => {
  if (err) {
    console.log("Unable to connect to weather service!");
  } else if (!res.body.features.length) {
    // remove country name from link
    console.log("Unable to find location!");
  } else {
    const latitude = res.body.features[0].center[0];
    const longitude = res.body.features[0].center[1];
    // console.log(latitude, longitude);
  }
});

// combined requests
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// geocode("georgia", (err, data) => {
//   console.log("err", err);
//   console.log("data", data);
// });

// forecast(40.069099, 45.038189, (err, data) => {
//   console.log("err", err);
//   console.log("data", data);
// });

// callback chaining
const address = process.argv[2];

if (!address) {
  console.log("Please provide an address");
} else {
  // geocode(address, (err, data) => {
  geocode(address, (err, { latitude, longitude, location } = {}) => {
    // we cn't destructure from undefined(data), so we must write {} as a default value

    if (err) {
      return console.log(err);
    }

    forecast(latitude, longitude, (err, forecastData) => {
      if (err) {
        return console.log(err);
      }

      // console.log(data.location);
      console.log(location);
      console.log(forecastData);
    });
  });
}
