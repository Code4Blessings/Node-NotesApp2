const fs = require('fs')
const chalk = require('chalk')

// ## Challenge: Wire Up Read Command

// 1. Setup --title option for read command
// 2. Create readNote in notes.js
//     - Search for note by title
//     - Find note amd print title (styled) and body(plain)
//     - No note found? Print error in red
// 3. Have the command handler call the function
// 4. Test your work by running a couple of comments

const getNotes = () => 'Your notes...'

//Create Note

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(note => note.title === title) - finds any duplicate notes, we need to scan for duplicate and then stop which is why we will use the below function
    const duplicateNote = notes.find(note => note.title === title)
        if(!duplicateNote) {
         notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added'))
    }else {
        console.log(chalk.bgRed('Note title already exists'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e) {
        return []
    }
}

//Remove Note

const removeNote = (title) => {
   //Load notes 
   const notes = loadNotes();
   //Make a new array with the removed title filtered out
   const keptNotes = notes.filter(note => note.title !== title)
   if(notes.length > keptNotes.length) {
        saveNotes(keptNotes)
        console.log(chalk.bgGreen('Note removed'))
   }else {
       console.log(chalk.bgRed('No such note found'))
   }
}

//List Notes

const listNotes = () => {
    console.log(chalk.bgWhite('Your Notes'))
    const lists = loadNotes()
    lists.forEach((list) => {
        console.log(chalk.bgBlue(list.title)) 
    })
}

//Read Note

const readNote = () => {
    
}



module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}