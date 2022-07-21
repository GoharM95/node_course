const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=a577ff23d3adea839ae8bbd499b3e7d2&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (err, res) => {
    if (err) {
      callback("Unable to connect to weather service!");
    } else if (res.body.error) {
      callback("Unable to find location!");
    } else {
      callback(
        undefined,
        `${weather_descriptions[0]}. It is currently ${temperature} degrees, but feels like ${feelslike} degrees out`
      );
    }
  });
};

module.exports = forecast;
