# Node-NotesApp2
- Do Over from Nodejs - NotesApp Repo
- Challenges Below are Saved for future practice
- This is based on Andrew Mead's Udemy Course--Node.js

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

## Validator 
- A dependency used to validate several different types of apps. Returns true or false for validity

https://www.npmjs.com/package/validator

#### Challenge: Use the chalk library in your project

1. Install version 2.4.1 of chalk
2. Load chalk into app.js
3. Use it to print the string "Success!" to the console in green
4. Test your work

**Bonus:** Use docs to mess around with other styles. Make text bold and inversed.

#### Yargs
- Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.

https://www.npmjs.com/package/yargs

#### Challenge: Add two new commands

1. Setup command to support "List" command (print placeholder for now).
2. Setup command to support "read" command (print placeholder for now).
3. Test your work by running both commands and ensure correct output.

# Storing JSON

const fs = require('fs')

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

- This takes in an object or an array and returns a string representation

```
const bookJSON = JSON.stringify(book)
console.log(bookJSON)
```
- This is a **string** not an object.  If you try to access it like an object, it will not work.

**JSON.parse()** - takes in the JSON string and gives us the object

```
const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author) //This method allows access to the object

fs.writeFileSync('1-JSON.json', bookJSON)

const dataBuffer = fs.readFileSync('1-JSON.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(dataBuffer)
console.log(dataJSON)
console.log(data.title)

```

#### Challenge: Storing JSON (See playfround directory)

1. Get sample JSON from this repo
https://gist.github.com/andrewjmead/c7d26a25ddc793f4210201747a9ba429

2. Load and parse the JSON data
3. Change the name and age property using your info
4. Stringify the changed object and overwrite the original data
5. Test your work by viewing data in the JSON file.

## Challenge: Setup RemoveNote Function (3 parts)

#### Part 1: Setup Command Option and Function

1. Setup the remonve command to take a required "--title" option
2. Create and export a removeNote function from notes.js
3. Call removeNote in remove command handler
4. Have removeNote log the title of the note to be removed
5. Test your work using: app.js remove --title="some title"

#### Part 2: Wire Up removeNote

1. Load existing notes
2. Use array filter method to remove the matching note (if any)
3. Save the newly created array
4. Test your work with a title that exists and a title that doesn't exist.

#### Part 3: Use Chalk to Provide Useful logs for remove

1. If a note is removed, print "Note removed!" with a green background
2. If a note is NOT removed, print "No such note found" with a red background

## Challenge: Wire up list command

1. Create and export listNotes from notes.js
    - "Your notes" using chalk
    - Print note title for each note
2. Call listNotes from the command handler
3. Test your work