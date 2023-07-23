import validator from "validator";

//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
const emailCheckResult = validator.isEmail("shoobert@dylan");
console.log(emailCheckResult);

//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
const phoneCheckResult = validator.isMobilePhone("786-329-9958", "en-US");
console.log(phoneCheckResult);

//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"];
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!";
//Ultimately, it should print "im so excited"

const handledString = validator.blacklist(text, blacklist)
console.log(handledString)
