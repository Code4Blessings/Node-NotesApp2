const fs = require('fs')
const chalk = require('chalk')


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

const readNote = (title) => {
    const notes = loadNotes();
    const findNote = notes.find(note => note.title === title)
    if(findNote) {
        console.log(chalk.bgBlue(findNote.title))
        console.log(chalk.yellow.inverse(findNote.body))
    }else {
        console.log('No note found')
    }   
}



module.exports = {
    
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}