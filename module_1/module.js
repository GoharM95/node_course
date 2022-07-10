// Module

// moving this to names and utils modules to see how sharing between modules work
// const john = "john";
// const peter = "peter";

// const sayHi = (name) => {
//   console.log(`Hello there ${name}`);
// };

// import by using require(path)
// const names = require("./names");
// console.log(names);

const { john, peter } = require("./names");

const sayHi = require("./utils");

sayHi("susan");
sayHi(john);
// sayHi(names.john); instead of
// const { john, peter } = require("./names");

sayHi(peter);
// sayHi(names.peter);

// here would make sense to have names data in a separate file,
//  to have better structure, that's why we need modules

// Node uses CommonJS library, every file is module(by default)
// Modules - Encapsulated Code (only share minimum, we share what we want)
