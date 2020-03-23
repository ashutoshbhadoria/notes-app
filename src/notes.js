// Import dependencies
const fs = require('fs');
const chalk = require('chalk');

// Add a note and save the notes data.
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(
    note => note.title.toLowerCase() === title.toLowerCase()
  );

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('Note saved successfully!'));
  } else {
    console.log(chalk.red.inverse('Title already taken! Note not saved'));
  }
};

const removeNote = title => {};

const listNotes = () => {};

const readNote = () => {};

// Load all the data from the json file as a JavaScript array of objects.
const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('./notes.json').toString());
  } catch (error) {
    return [];
  }
};

// Save the JavaScript object / array data in the JSON file.
const saveNotes = notesData => {
  fs.writeFileSync('./notes.json', JSON.stringify(notesData));
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
