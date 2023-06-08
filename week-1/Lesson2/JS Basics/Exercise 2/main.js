// let boughtTesla = Boolean(prompt("Are you bought Tesla's car ?(Answer true or false)"));
// const yearOfTeslaPurchase = Number(prompt("When you bought your car ?(year)"));
// let isUSCitizen = prompt("Are you US citizen ?(Answer true or false)");
let currentYear = 2018

if (prompt("Are you bought Tesla's car ?(Answer true or false)") === "true") {
    if (Boolean(prompt("Are you US citizen ?(Answer true or false)") === "true")) {
        if (currentYear - Number(prompt("When you bought your car ?(year)")) >= 4) {
            prompt("Would you like an upgrade ?");
        } else {
            prompt("Are you satisfied with the car ?");
        }
    } else {
        prompt("Would you like to move to USA ?");
    }
} else {
    prompt("Are you interested in buying one ?");
}