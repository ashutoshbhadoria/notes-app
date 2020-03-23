// Import dependencies
const yargs = require('yargs');
const notes = require('./notes');

// Set up cmmand for adding a note.
yargs.command({
  command: 'add',
  describe: 'Add a note.',
  builder: {
    title: {
      describe: 'Note title.',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note description.',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Set up command for removing a note.
yargs.command({
  command: 'remove',
  describe: 'Remove a note.',
  builder: {
    title: {
      describe: 'Note title.',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

// Set up command for listing all notes.
yargs.command({
  command: 'list',
  describe: 'List all notes.',
  handler() {
    notes.listNotes();
  }
});

// Set up command for reading a note description.
yargs.command({
  command: 'read',
  describe: 'Read a note description.',
  builder: {
    title: {
      describe: 'Note title.',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
});


yargs.parse();
