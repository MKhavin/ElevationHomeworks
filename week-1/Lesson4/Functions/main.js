"use strict"

const numbers = [1, 2, 3, 4, 5, 6, 7]

// First task
function isEven(number) {
    return number % 2 === 0
}

console.log(isEven(2))

// Second task
function getOddNumbers(numbers) {
    for (let number of numbers) {
        if (!isEven(number)) {
            console.log(number);
        }
    }
}

getOddNumbers(numbers)

// Third task
function isNumberInArray(array, number) {
    for (let element of array) {
        if (element === number) {
            return true
        }
    }

    return false
}

console.log(isNumberInArray(numbers, 2))

// Fourth task
const calculator = {
    add: function (firstNumber, secondNumber) {
        return firstNumber + secondNumber
    },
    subtract: function (firstNumber, secondNumber) {
        return firstNumber - secondNumber
    }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42

// Fifth task
const increaseByNameLength = function (money, name) {
    return name.length * money
}

const makeRegal = function (name) {
    return `His Royal Highness, ${name.toUpperCase()}`
}

const turnToKing = function (name, money) {
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

// Optional Task
const people_info = [
    {
        name: "guido",
        profession: "bungalow builder",
        age: 17,
        country: "canaland",
        city: "sydurn",
        catchphrase: "what a piece of wood!"
    },
    {
        name: "petra",
        profession: "jet plane mechanic",
        age: 31,
        country: "greenmark",
        city: "bostork",
        catchphrase: "that's my engine, bub"
    },
    {
        name: "damian",
        profession: "nursery assistant",
        age: 72,
        country: "zimbia",
        city: "bekyo",
        catchphrase: "with great responsibility comes great power"
    }
]

function capitalizeFirstLetter(string) {
    if (!string) {
        return
    }

    if (string.length === 1) {
        return string.toUpperCase()
    }

    return string[0].toUpperCase() + string.slice(1)
}

function capitalizeString(string) {
    if (!string) {
        return
    }

    if (string.length === 1) {
        return string.toUpperCase()
    }

    const strings = string.split(" ")
    let result = ""

    for (let element of strings) {
        result += (result ? " " : "") + capitalizeFirstLetter(element)
    }

    return result
}

function getAge(age) {
    if (age < 21) {
        return "underage"
    } else if (age > 55) {
        return "55+"
    } else {
        return age + " year old"
    }
}

const getSummary = function (person) {
    const name = capitalizeFirstLetter(person.name)
    const profession = capitalizeString(person.profession)
    const livingPlace = capitalizeString(person.city) + ", " + capitalizeString(person.country)
    const catchphrase = capitalizeFirstLetter(person.catchphrase)
    const age = getAge(person.age)

    let summary = `${name} is ${age} ${profession} from ${livingPlace}. ${name} loves to say "${catchphrase}".`
    console.log(summary)
}

getSummary(people_info[2])

// Optional exercise
function removeSpecialCharsFromString(string, specialChars) {
    let newString = string

    for (let specialChar of specialChars) {
        newString = newString.replaceAll(specialChar, "")
    }

    return newString
}

function countUniqueWords(story) {
    const words = story.toLowerCase().split(" ")

    for (let word of words) {
        if (wordCounts[word]) {
            wordCounts[word] += 1
        } else {
            wordCounts[word] = 1
        }
    }
}

const story = `In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.`
const wordCounts = {}
const specialChars = [",", ".", "'", '"', "?", "!", ";"]

function getSummaryOfWordsCount() {
    const clearStory = removeSpecialCharsFromString(story, specialChars)
    countUniqueWords(clearStory)
    console.log(wordCounts)
}

getSummaryOfWordsCount()