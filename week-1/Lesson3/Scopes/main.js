// Section 1

const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running")
    }
    console.log("Finished running " + distance + " miles")
}

console.log("Damn, you see this gal? She ran " + distance + " miles") 

// Questions
// What will console log? - 8 times running, Finished running and error.
// Will there be an error? - yes.
// Why? - Because we use distance variable, but it's not enable in this scope.
// Will something be undefined? - Will be variable i, if we will access to it in scope above or just simple above before it's declaration.
// Why? - because var can be accessed before its declaration.
// To what scope does each variable belong? - distance to block scope of first if.  i will be in global scope.
// Global or local? If local, to which specifically? -

// Section 2

if (13 == "space") {
    let cowSound = "moo"
}
else {
    console.log("Cow says " + cowSound)
}

// Questions
// What will console log? - error.
// Will there be an error? - yes.
// Why? - Because we use cowSound variable, but it's not enable in this scope.
// Will something be undefined? - nothing.
// Why? - cause we haven't here any var variables.
// To what scope does each variable belong? - cowSound belongs to local block scope of first if.
// Global or local? If local, to which specifically? -

// Section 3

const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder)
    }

    console.log("Finished serving all the orders: " + orders)
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)

// Questions
// What will console log? - will be log all orders with "Served .....". After that will be also log "Finished ...." with array of orders.
// Will there be an error? - no.
// Why? - cause it's allright)
// Will something be undefined? - nothing.
// Why? - cause we haven't here any var variables.
// To what scope does each variable belong? - allOrders to global scope. orders to function scope. order and special order just for block scope of loop.
// Global or local? If local, to which specifically? -

// Section 4

const pot = "red pot with earth in it"

const getSeed = function () {
    const seed = "brown seed"
}

const plant = function () {
    getSeed()
    console.log("Planting the " + seed + " inside a " + pot)
}

plant()

// Questions
// What will console log? - nothing.
// Will there be an error? - yes.
// Why? - cause we are trying to access to seed variable in plant function, but it's not declared in this scope.
// Will something be undefined? - nothing.
// Why? - cause we haven't here any var variables.
// To what scope does each variable belong? - pot, getSeed and plant belongs to global scope. seed to function scope of getSeed.
// Global or local? If local, to which specifically? -

// Section 5

const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
    for (let u of users) {
        if (u.name == name) {
            const found = true
        }
    }
    return found
}

const userExists = doesUserExist("Lucius")
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.")
}

// Questions
// What will console log? - will be an error.
// Will there be an error? - yes.
// Why? - because we are trying to access to found in scope, where it's unavalable.
// Will something be undefined? - nothing.
// Why? - cause we haven't here any var variables.
// To what scope does each variable belong? - doesUserExist and userExists belongs to global scope. 
//              name, users to function scope of doesUserExist. u belongs to local block scope of loop. found belongs to local block scope of if.
// Global or local? If local, to which specifically? -

// Section 6

const isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}

// Questions
// What will console log? - will be an error.
// Will there be an error? - yes.
// Why? - because we are trying assign a new value to constant.
// Will something be undefined? - nothing.
// Why? - cause we haven't here any var variables.
// To what scope does each variable belong? - isEnough and makeEnough belongs to global scope. i belongs to local block scope of loop.
// Global or local? If local, to which specifically? -