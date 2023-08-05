// Exercise 1
let meatArr = ["beef", "chicken"]
let vegetableArr = ["rabbit", "carrots", "potatoes", "lettuce"]

meatArr = [...meatArr, vegetableArr[0]]
vegetableArr.splice(0, 1)

console.log(meatArr, vegetableArr)

// Exercise 2
const firstPiece = { id: 101, name: 'Ofri' }
const seoncdPiece = { country: 'Israel' }

const combineObject = { ...firstPiece, ...seoncdPiece }
console.log(combineObject)