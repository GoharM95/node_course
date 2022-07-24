const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("Hello express!");
});

app.get("/help", (req, res) => {
  res.send("Help page");
});

// app.get("/about", (req, res) => {
//   res.send("About page");
// });

// app.get("/weather", (req, res) => {
//   res.send("Weather page");
// });

// app.listen(3000, () => {
//   console.log("Server is up on port 3000");
// });

app.get("/weather", (req, res) => {
  res.send("<h1>Weather</h1>");
});

app.get("/about", (req, res) => {
  res.send({ name: "Gohar", age: 27 });
  // the object will be automatically stringified,
  // an array will work the same way
});

app.get("/header", (req, res) => {
  res.send("<h1>Header</h1>");
});

app.get("/weatherForecast", (req, res) => {
  res.send({ forecast: "It's sunny", location: "Armenia" });
});
