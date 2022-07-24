const express = require("express");

const app = express();

// 1
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

// 2
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

// 3
const path = require("path");

const app2 = express();

console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname, "../public"));

const publicDirectoryPath = path.join(__dirname, "../public");

// use() is used for customizing the server
app2.use(express.static(publicDirectoryPath));

app2.listen(3000, () => {
  console.log("Server is up on port 3000");
});
