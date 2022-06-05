const yargs = require('yargs')
const notes = require('./notes')



//Customize yargs 
yargs.version('1.1.0')

//add, remove, read, list

//Add command
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
       notes.addNote(argv.title, argv.body)
    }
})

//Remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//List command
yargs.command({
    command: 'list',
    describe: 'List of Notes',
    builder: {
        title: {
            describe: 'List Notes',
            demandOption: false,
            type: {}
        }
    },
    handler() {
        notes.listNotes()
    }
})

//Read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Read notes',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()

//console.log(process.argv)
//console.log(yargs.argv) 


