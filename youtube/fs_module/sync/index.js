const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./fs_module/sync/example.txt", "utf8");
console.log(first);

writeFileSync("./fs_module/sync/example2.txt", `here is the result: ${first}`);
//any content in example2.txt will be overwritten by the content of the first

writeFileSync("./fs_module/sync/example2.txt", `here is the result: ${first}`, {
  flag: "a",
});
