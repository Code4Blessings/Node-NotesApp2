const add = require('./utils')
const getNotes = require('./notes')

const sum = add(4, -2)
const notes = getNotes()

console.log(sum)
console.log(notes)

//Challenge: Define and use a function in a new file

//1. Create a new file called notes.js
//2. Create a getNotes function that returns "Your notes.."
//3. Export getNotes function
//4. From app/js load in and call the function printing message to console

