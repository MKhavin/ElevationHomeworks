const circleUtils = require("./circleUtils")
const dbUtils = require("./dbName")

console.log(circleUtils.pi)
console.log(circleUtils.title)
console.log(circleUtils.calcCircleArea)

const circleUtilities = require('./circleUtils')

const r = 4
console.log(`The area of a circle with radius ${r} is ${circleUtilities.calcCircleArea(r)}`)
//^prints "The area of a circle with radius 4 is 50.26544"

// SpotCheck 1
console.log(dbUtils.dbName)
