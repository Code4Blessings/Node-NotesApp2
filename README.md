# Node-NotesApp2
Do Over from Nodejs - NotesApp Repo

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
