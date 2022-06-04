//ES5 version

// const square = function (x) {
//     return x*x
// }

//ES6 (short hand arraow function when the function has only one statement)

// const square = x => x*x

// console.log(square(3))

const party = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen','Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

party.printGuestList()
 
//Arrow functions do not work well with methods as shown in the in the parent function but the child functions can use it.