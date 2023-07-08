// SpotCheck 1

class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const myDog = new Animal("Rex", 5)
console.log(myDog)

// SpotCheck 2
class Human {
    constructor(name, age, isFriendly) {
        this.name = name
        this.age = age
        this.isFriendly = isFriendly
    }
}

const me = new Human("Michael", 26, true)
console.log(me)

// SpotCheck 3
class Animal2 {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.children = []
    }

    giveBirth(name) {
        this.children.push(name)
        console.log(this.children)
    }
}

const brothersDog = new Animal2("Roxy", 5)
brothersDog.giveBirth("Molly")

// SpotCheck 4
class Vehicle {
    constructor(x, y, speed) {
        this.x = x
        this.y = y
        this._speed = speed
        this._fuel = 0
        
        Vehicle.carsSold++
    }

    static getInfo() {
        console.log("We've sold " + Vehicle.carsSold + " vehicles.");
    }    

    // SpotCheck 5
    static calculateMoney() {
        console.log(`Made ${Vehicle.carsSold * 30000} dollars`)
    }

    // SpotCheck 6
    set speed(speed) {
        if (speed < 0) {
            return console.log("Speed can't be negative.")
        }

        this._speed = speed
    }

    get speed() {
        return this._speed
    }

    set fuel(fuel) {
        if (fuel < 0 || fuel > 150) {
            return console.log("Fuel can't be negative and be more than 150.")
        }

        this._fuel = fuel
    }

    get fuel() {
        return this._fuel
    }
}

Vehicle.carsSold = 0

const car = new Vehicle(1, 2, 250)
// car.getInfo()
const secondCar = new Vehicle(3, 1, 120)

Vehicle.getInfo()

// SpotCheck 5
Vehicle.calculateMoney()

// SpotCheck 6
car.speed = -10
console.log(car.speed)
