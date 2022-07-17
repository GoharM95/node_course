const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  console.log("Your notes...");
};

const removeNote = (title) => {
  const notes = loadNotes();

  const filteredNotes = notes.filter((note) => {
    return note.title !== title;
  });

  if (filteredNotes.length < notes.length) {
    console.log(chalk.green("Note removed!"));
    saveNotes(filteredNotes);
  } else {
    console.log(chalk.red("No note found!"));
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (!duplicateNotes.length) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New notes added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

module.exports = { getNotes, addNote, removeNote };
