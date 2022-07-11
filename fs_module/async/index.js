const { readFile, writeFile } = require("fs");

readFile("./fs_module/async/async.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  const first = result;
  writeFile(
    "./fs_module/async/async2.txt",
    `here is the result: ${first}`,
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
    }
  );
});
