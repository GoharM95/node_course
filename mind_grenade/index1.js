require("./index2");

// this will run, even though we didn't assign it to a variable
// each file's(module's) code is wrapped in a function, which gets immediately invoked,
//  that's why require("./index2") is working like this
// the function is
// (function(exports, require, module, __filename, __dirname){})
