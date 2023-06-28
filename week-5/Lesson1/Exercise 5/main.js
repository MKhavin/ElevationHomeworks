function setUI() {
    const fruits = [
        { name: "Orange", color: "orange" },
        { name: "Banana", color: "yellow" },
        { name: "Coconut", color: "brown" },
        { name: "Kiwi", color: "brown" },
        { name: "Lemon", color: "yellow" },
        { name: "Cucumber", color: "green" },
        { name: "Persimmon", color: "orange" },
        { name: "Pumpkin", color: "orange" }
    ]

    fruits.forEach(value => $("#basket").append(`<div class='${value.color}'>${value.name}</div>`))
}

setUI()