const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const port = process.env.PORT || 3000;

// const app = express();

// 1
// app.get("", (req, res) => {
//   res.send("Hello express!");
// });

// app.get("/help", (req, res) => {
//   res.send("Help page");
// });

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
// app.get("/weather", (req, res) => {
//   res.send("<h1>Weather</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send({ name: "Gohar", age: 27 });
//   // the object will be automatically stringified,
//   // an array will work the same way
// });

// app.get("/header", (req, res) => {
//   res.send("<h1>Header</h1>");
// });

// app.get("/weatherForecast", (req, res) => {
//   res.send({ forecast: "It's sunny", location: "Armenia" });
// });

// 3
// const path = require("path");

// const app2 = express();

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, "../public"));

// const publicDirectoryPath = path.join(__dirname, "../public");

// // use() is used for customizing the server
// app2.use(express.static(publicDirectoryPath));

// app2.listen(3000, () => {
//   console.log("Server is up on port 3000");
// });

// 4
const path = require("path");

const app3 = express();

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
// customizing default views directory name(templates)
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
// run from web-server - "web-server % node src/app.js"
app3.set("view engine", "hbs");
app3.set("views", viewsPath);
// partials are used for reusable pieces like header, footer...
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app3.use(express.static(publicDirectoryPath));

app3.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Gohar",
  });
});

app3.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Henry",
  });
});

app3.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Gohar",
    message: "I'm here to help you",
  });
});

app3.get("/weather", (req, res) => {
  const { address } = req.query;

  if (!address) {
    res.send({
      error: "you must provide an address",
    });
  }

  geocode(address, (err, { latitude, longitude, location } = {}) => {
    if (err) {
      return res.send({ err });
    }

    forecast(latitude, longitude, (err, forecastData) => {
      if (err) {
        return res.send({ err });
      }

      res.send({
        forecast: forecastData,
        location,
        address: req.query.address,
      });
    });
  });
});

// add searchterm to the link = "http://localhost:3000/products?search=games"
app3.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "you must provide a search term",
    });
  }

  res.send({ products: [] });
});

// if I don't have the path for example http://localhost:3000/me
app3.get("*", (req, res) => {
  res.render("404", { errorMessage: "page not found" });
});

app3.get("/help/*", (req, res) => {
  res.render("404", { errorMessage: "article not found" });
});

// app3.listen(3000, () => {
//   console.log("Server is up on port 3000");
// });

// heroku deployment
app3.listen(port, () => {
  console.log(`Server is up on port 3000${port}`);
});
