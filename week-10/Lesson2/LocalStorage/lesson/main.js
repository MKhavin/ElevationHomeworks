let userStorage = {
    darkMode: true,
    showSideNav: false,
    defaultResultCount: 9,
    latestMarks: {
        sectionA: 92,
        sectionB: 11
    },
    cart: [
        { id: 3112, count: 2 },
        { id: 812, count: 16 }
    ]
}

localStorage.setItem("userStorage", JSON.stringify(userStorage))

const lastItemOfCartCount = JSON.parse(localStorage.getItem("userStorage") || "{cart: []}").cart.slice(-1)[0].count
console.log(lastItemOfCartCount)
