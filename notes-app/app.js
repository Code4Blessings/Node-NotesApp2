const yargs = require('yargs')
const notes = require('./notes')

// ## Part 3: Use Chalk to Provide Useful logs for remove

// 1. If a note is removed, print "Note removed!" with a green background
// 2. If a note is NOT removed, print "No such note found" with a red background

//Customize yargs 
yargs.version('1.1.0')

//add, remove, read, list

//Create add command
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
    handler: function(argv) {
       notes.addNote(argv.title, argv.body)
    }
})

//Create remove command

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
    handler: function(argv) {
        notes.removeNote(argv.title)
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List Notes',
    handler: function() {
        console.log('List of notes')
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read note',
    handler: function() {
        console.log('Reading note')
    }
})

yargs.parse()

//console.log(process.argv)
//console.log(yargs.argv) 


