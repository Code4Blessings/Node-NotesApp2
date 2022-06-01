const chalk = require('chalk');
const yargs = require('yargs')
const getNotes = require('./notes')

//Customize yargs 
yargs.version('1.1.0')

//add, remove, read, list

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note Title'
        }
    },
    handler: function() {
        console.log('Adding a new note', argv)
    }
})

//Create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note')
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


console.log(process.argv)
console.log(yargs.argv) 


