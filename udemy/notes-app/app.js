// const fs = require("fs");
// fs.writeFileSync("notes.txt", "Hello there!");
// fs.appendFileSync("notes.txt", "Hiiiii");

// const getNotes = require("./notes");
// const notes = getNotes();

// const validator = require("validator");
// console.log(validator.isEmail("gohar@gmail.com")); // true
// console.log(validator.isURL("https://w.com")); // true

// const chalk = require("chalk");
// console.log(chalk.green("success!"));

// fs_and_command_line_args
// const command = process.argv[2];

// console.log(process.argv);

// if (command === "add") {
//   console.log("Adding note!");
// } else if (command === "remove") {
//   console.log("Removing note!");
// }

/////////////////////////////////////
const { title, argv } = require("process");
const yargs = require("yargs");

console.log(process.argv);

// Customize yargs version so I can add, remove...
yargs.version("1.1.0");

// Create add command
// yargs.command({
//   command: "add",
//   describe: "Add a new note",
//   handler: function () {
//     console.log("Adding a new note!");
//   },
// });

// Create remove command
// yargs.command({
//   command: "remove",
//   describe: "Remove a new note",
//   builder: {
//     body: {
//       describe: "Note body",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler: function (argv) {
//     console.log(`Body: ${argv.body}`);
//     console.log("Removing a note!");
//   },
// });

// Create list command
// yargs.command({
//   command: "list",
//   describe: "List all notes",
//   handler: function () {
//     console.log("Listing out all notes!");
//   },
// });

// Create read command
// yargs.command({
//   command: "read",
//   describe: "Read a note",
//   builder: {
//     title: {
//       describe: "Note title",
//       // to make title required [node app.js read --title="Shopping list"]
//       // by default is false
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler: function (argv) {
//     console.log(`Title: ${argv.title}`);
//     console.log("Reading a note!", argv);
//   },
// });

// instead of console.log(yargs.argv) we can do
yargs.parse();

// JSON
const notes = require("./notes.js");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    console.log("argv", argv);
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "List all notes",
  handler() {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
