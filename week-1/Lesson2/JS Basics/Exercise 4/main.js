'use strict'

function firstTask() {
    const p1 = {
        name: "Jill",
        age: 25,
        city: "Tel-Aviv"
    };

    const p2 = {
        name: "Robert",
        age: 28,
        city: "New-York"
    };

    if (p1.age === p2.age) {
        if (p1.city === p2.city) {
            console.log(`${p1.name} wants to date with ${p2.name}`);
        } else {
            console.log(`${p1.name} can't date with ${p2.name}. They are leaving in differents city`);
        };
    } else {
        console.log(`${p1.name} wanted to date ${p2.name}, but couldn’t`);
    };
}

function secondTask() {
    const library = {
        books: [
            {
                title: "Dan Brown",
                author: "The Code of Da Vinci"
            },
            {
                title: "JavaScript",
                author: "Mozilla"
            }
        ]
    };

    console.log(library);
}

function thirdTask() {
    const reservations = {
        Bob: { claimed: false },
        Ted: { claimed: true }
    }

    let customerName = prompt('Please enter the name for your reservation').toLowerCase();
    customerName = customerName[0].toLocaleUpperCase() + customerName.slice(1);

    if (reservations[customerName]) {
        if (!reservations[customerName].claimed) {
            alert(`Welcome, ${customerName}`);
        } else {
            alert("Hmm, someone already claimed this reservation");
        };
    } else {
        // alert("You have no reservation");
        reservations[customerName] = {
            claimed: true
        };
    };
}

function fourthTask() {
    const date = 3

    const kitchen = {
        owner: "Geraldine",
        hasOven: false,
        fridge: {
            price: 500,
            works: false,
            items: [
                { name: "cheese", expiryDate: 7 },
                { name: "raddish", expiryDate: 2 },
                { name: "bread", expiryDate: 1 }
            ]
        }
    };

    for (let item of kitchen.fridge.items) {
        const expired = date - item.expiryDate;

        if (expired > 0) {
            console.log(`${kitchen.owner}'s ${item.name} expired ${expired} day${expired > 1 ? "'s" : ""} ago.`);

            if (kitchen.fridge.works) {
                console.log("Weird, considering her fridge works. ");
            } else {
                console.log("Probably because her fridge doesn’t work.");
            };

            if (kitchen.hasOven) {
                console.log(`Luckily, she has an oven to cook the ${item.name}`);
            } else {
                console.log(`Too bad she doesn’t have an oven to cook the ${item.name} in.`);
            };

            if (!kitchen.fridge.works) {
                console.log(`And she’ll have to pay ${kitchen.fridge.price / 2} to fix the fridge.`)
            };
        };
    };
}

firstTask();
secondTask();
thirdTask();
fourthTask();