const myObject = {
    next: {
        counter: -1,
        array: [11, 13, 14, 66, 67, 69, 234, 456, 2, 1],

        next: function () {
            this.counter++

            if (this.counter >= this.array.length) {
                return { value: undefined, done: true }
            }

            const value = this.array[this.counter]

            if (value % 2 !== 0) {
                return this.next()
            }

            return { value: value, done: false }
        }
    },

    [Symbol.iterator]: function () {
        return this.next
    }
}

for (let x of myObject) {
    console.log(x)
}
