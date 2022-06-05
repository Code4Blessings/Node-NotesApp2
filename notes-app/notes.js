const fs = require('fs')
const chalk = require('chalk')

// ## Challenge: Wire up list command

// 1. Create and export listNotes from notes.js
//     - "Your notes" using chalk
//     - Print note title for each note
// 2. Call listNotes from the command handler
// 3. Test your work


const getNotes = () => 'Your notes...'


//Create Note

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note => note.title === title)
    
        if(duplicateNotes.length === 0) {
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



module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}