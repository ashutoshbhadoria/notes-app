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

// Remove a note and save the notes data.
const removeNote = title => {
  const notes = loadNotes();
  const updatedNotes = notes.filter(
    note => note.title.toLowerCase() !== title.toLowerCase()
  );

  if (updatedNotes.length < notes.length) {
    saveNotes(updatedNotes);
    console.log(chalk.green.inverse('Note removed successfully!'));
  } else {
    console.log(chalk.red.inverse('Note not found!'));
  }
};

// List all the notes.
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.yellow.bold('Your notes:'));
  notes.forEach((note, index) => {
    console.log(`${index + 1}. ${note.title}`);
  });
};

// Read a note description.
const readNote = title => {
  const notes = loadNotes();
  const targetNote = notes.find(
    note => note.title.toLowerCase() === title.toLowerCase()
  );
  if (targetNote) {
    console.log(chalk.green(targetNote.title));
    console.log(chalk.cyan(targetNote.body));
  } else {
    console.log(chalk.red.inverse('Note not found!'));
  }
};

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
