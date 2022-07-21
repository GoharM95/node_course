const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?types=country&access_token=pk.eyJ1IjoiZ29oYW0iLCJhIjoiY2w1dHJlZTFwMGswMzNwcDNvOHAyZXdrdyJ9.CUPRR7g3iQX1O2bGRumeuQ`;
  // encodeURIComponent handles special characters like "?"

  request({ url, json: true }, (err, res) => {
    if (err) {
      callback("Unable to connect to weather service!");
    } else if (!res.body.features.length) {
      callback("Unable to find location!");
    } else {
      callback(undefined, {
        latitude: res.body.features[0].center[0],
        longitude: res.body.features[0].center[1],
        location: res.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
