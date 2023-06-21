// const first = function () {
//     setTimeout(function () {
//         console.log("should be first")
//     }, 3000)
// }

// const second = function () {
//     console.log("should be second")
// }

// first()
// second()

const first = function (callback) { //receive the function as a parameter
    setTimeout(function () {
        console.log("should be first")
        callback() //this is the `second` function being invoked
    }, 3000)
}

const second = function () {
    console.log("should be second")
}

first(second) //pass the second function to the first, as an argument

// 
let users = []

const getData = function (callback) {
    setTimeout(function () {
        users = [{ name: "Rick" }, { name: "Morty" }]
        console.log("Got users")
        callback()
    }, 3000);
}

const displayData = function () {
    console.log("Going to display: " + users)
    for (user of users) {
        console.log(user.name)
    }
}

getData(displayData)

// 
setInterval(function () {
    console.log(new Date())
}, 1000)

// 
const square = number => console.log(Math.pow(number, 2))

square(4) // should print 16

// 
const getFormalTitle = (firstName, lastName) => `${firstName} ${lastName}`

const formalTitle = getFormalTitle("Madamme", "Lellouche")
console.log(formalTitle) //returns "Maddame Lellouche"
