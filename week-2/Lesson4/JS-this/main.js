const person = {
    username: "Felicia",
    introduce: function () {
        console.log(`Hi, i'm ${username}`)
    }
}

person.introduce()

const counter = {
    count: 0,

    updateCounter: function () {
        this.count += 1;
    }
};

counter.updateCounter();
counter.updateCounter();
counter.updateCounter();

alert(counter.count);
