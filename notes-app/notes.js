const fs = require('fs')


const getNotes = function() {
    return 'Your notes...';
}

const addNote = (title, body) => {
    const notes = loadNotes()
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
}

const saveNotes = (notes) => {
    const dataJSON = dataBuffer
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toSting()
        return JSON.parse(dataJSON)
    }catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
};