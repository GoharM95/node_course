// GLOBALS - NO WINDOW !!!!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (Common JS)
// module - info about current module (file)
// process - info about environment where the program is being executed

// we can access console.log(), setTimeout and setInterval globally

console.log(__dirname); // /Users/gohar/Desktop/node
console.log(__filename); // /Users/gohar/Desktop/node/globals.js

setInterval(() => console.log("hello"), 1000);
