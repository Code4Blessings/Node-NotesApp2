# Node-NotesApp2
- Do Over from Nodejs - NotesApp Repo
- Challenges Below are Saved for future practice

## File System 
https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fsappendfilesyncpath-data-options

#### Example

const fs = require('fs')

- The two arguments in the fileSystem (fs) here is the file name that we want to create and the second argument is the data we want to add to it.

fs.writeFileSync('notes.txt', 'My name is Robin Warden')
fs.appendFileSync('notes.txt', 'I work as a Developer and I am extremely talented and well recognized.')

#### Challenge: Append a message to notes.txt

1. Use appendFileSync to append to the file
2. Run the script
3. Check your work by opening the file and viewing the appended text

#### Importing Your Own Files

app.js file 

```
const add = require('./utils')
const getNotes = require('./notes')

const sum = add(4, -2)
const notes = getNotes()

console.log(sum)
console.log(notes)

```

utils file

```
console.log('utils.js')

const firstName = 'Robin';

const add = function(a,b) {
    return a + b
}

module.exports = add

```

#### Challenge: Define and use a function in a new file

1. Create a new file called notes.js
2. Create a getNotes function that returns "Your notes.."
3. Export getNotes function
4. From app/js load in and call the function printing message to console
