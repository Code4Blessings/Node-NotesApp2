const fs = require('fs')

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

//This takes in an object or array and returns a string representation
const bookJSON = JSON.stringify(book)
console.log(bookJSON)
//This is a string not an object.  If you try to access it like an object, it will not work.

//JSON.parse() - takes in the JSON string and gives us the object

const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author) //This method allows access to the object

fs.writeFileSync('1-JSON.json', bookJSON)