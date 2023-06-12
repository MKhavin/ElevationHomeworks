const coffeeShop = {
    beans: 40,
    amountOfMoney: 5000,

    drinkRequirements: {
        latte: { beanRequirement: 10, price: 5 },
        americano: { beanRequirement: 5, price: 2 },
        doubleShot: { beanRequirement: 15, price: 10 },
        frenchPress: { beanRequirement: 12, price: 8 }
    },

    getRequiredBeans: function (requiredBeans) {
        if ((this.beans - requiredBeans) > 0) {
            this.beans -= requiredBeans
        } else {
            console.log("Sorry, we’re all out of beans!")
        }
    },

    makeDrink: function (drinkType) {
        if (this.drinkRequirements[drinkType]) {
            const requiredBeans = this.drinkRequirements[drinkType].beanRequirement

            this.getRequiredBeans(requiredBeans)
        } else {
            console.log(`Sorry, we don't make ${drinkType}`)
        }
    },

    buyBeans: function (numBeans) {
        const beanPrice = 500
        const beansPrice = beanPrice * numBeans

        if (beansPrice > this.amountOfMoney) {
            console.log("Sir, we don't have money for this")
        } else {
            this.amountOfMoney -= beansPrice
            this.beans += numBeans

            console.log(`Sir, you bought ${numBeans} beans by ${beansPrice}$`)
        }
    },

    buyDrink: function (drinkType) {
        if (this.drinkRequirements[drinkType]) {
            this.amountOfMoney += this.drinkRequirements[drinkType].price
            this.makeDrink(drinkType)
        } else {
            console.log(`Sorry, we don't make ${drinkType}`)
        }
    }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
coffeeShop.buyBeans(5);
coffeeShop.buyDrink("latte");

