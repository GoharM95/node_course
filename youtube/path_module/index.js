const path = require("path");

console.log(path.sep); // => /

const filePath = path.join("../mind_grenade", "index1");
console.log(filePath); // ../mind_grenade/index1

const base = path.basename(filePath);
console.log(base); // index1

const absolute = path.resolve(__dirname, "mind_grenade", "index1");
console.log(absolute); // /Users/gohar/Desktop/node/path_module/mind_grenade/index1
