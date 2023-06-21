function sum() {
    let previousSum = 0

    return function (num) {
        const sum = previousSum + num
        previousSum = sum

        return sum
    }
}

const add = sum()

console.log(add(3));  //3
console.log(add(1));  //4
console.log(add(2));  //3
console.log(add(2));  //4
console.log(add(8));  //10

// 
const setCounter = function (num) {
    let counter = 0

    const count = function () {
        counter += num;
        console.log(counter)
    }

    return count
}

const increment = setCounter(2)
increment()
increment()
increment()

// 
const family = function () {
    let members = []
    const birth = (name) => {
        members.push(name)
        console.log(members)
    }

    return birth
}

const giveBirth = family()

giveBirth("Michael")
giveBirth("Rone")

// 
const mathOperations = function () {
    const add = function (x, y) {
        return x + y;
    }

    const subtract = function (x, y) {
        return x - y;
    }

    const multiply = function (x, y) {
        return x * y;
    }

    const divide = function (x, y) {
        return x / y;
    }

    return {
        add,
        subtract,
        multiply,
        divide
    }
}

const operations = mathOperations()

console.log(operations.add(5, 10))
console.log(operations.divide(3, 1))


// What is 13 + 29?
console.log(operations.add(13, 29))

// What is 1.75 x 24?
console.log(operations.multiply(1.75, 24))

// What is 7 x (36 / 6)? (do this in one line)
console.log(operations.multiply(7, operations.divide(36, 6)))

// 

const UsersModule = function () {
    const _users = ['Aaron', 'Avi'];

    const addUser = function (user) {
        _users.push(user)
    }

    const listUsers = function () {
        for (let user of _users) {
            console.log(user)
        }
    }

    return {
        addUser: addUser,
        listUsers: listUsers
    }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.listUsers()

// Add another two users
usersModule.addUser("Michael")
usersModule.addUser("Ronen")

// Show the users
usersModule.listUsers()

// Try to do console.log(userModule.users) - what do you see?
console.log(usersModule.users)