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
    handler: function() {
        console.log('Adding a new note')
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


console.log(process.argv)
console.log(yargs.argv) 


