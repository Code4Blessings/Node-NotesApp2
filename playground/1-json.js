const fs = require('fs')

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

//This takes in an object or an array and returns a string representation
const bookJSON = JSON.stringify(book)
console.log(bookJSON)
//This is a string not an object.  If you try to access it like an object, it will not work.

//JSON.parse() - takes in the JSON string and gives us the object

const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author) //This method allows access to the object

fs.writeFileSync('1-JSON.json', bookJSON)

const dataBuffer = fs.readFileSync('1-JSON.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(dataBuffer)
console.log(dataJSON)
console.log(data.title)


//Challenge

// 1. Load and parse the JSON data
const jsonData = fs.readFileSync('1-JSON.json')
console.log(jsonData)

const jsonParse = JSON.parse(jsonData)
console.log(jsonParse)
// 2. Change the name and age property using your info
console.log(jsonParse.name = 'Robin', jsonParse.age = 47)
console.log(jsonParse)

// 3. Stringify the changed object and overwrite the original data
const robinJSON = JSON.stringify(jsonParse)
console.log(robinJSON);

fs.writeFileSync('1-JSON.json', robinJSON)
// 4. Test your work by viewing data in the JSON file.


