const fs = require("fs");

const user = {
  name: "Andrew",
  planet: "Earth",
  age: 27,
};

const userJSON = JSON.stringify(user);
fs.writeFileSync("index1.json", userJSON);

const dataBuffer = fs.readFileSync("index1.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = "Gohar";

const newUserJSON = JSON.stringify(data);
fs.writeFileSync("index1.json", newUserJSON);
