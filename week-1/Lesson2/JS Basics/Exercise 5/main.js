`use strict`

const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

const minLength = names.length <= ages.length ? names.length : ages.length

for (let i = 0; i < minLength; i++) {
    people.push({
        name: names[i],
        age: ages[i]
    })
}
console.log(people)

for (let person of people) {
    console.log(`${person.name} is ${person.age} old`);
}

const posts = [
    { id: 1, text: "Love this product" },
    { id: 2, text: "This is the worst. DON'T BUY!" },
    { id: 3, text: "So glad I found this. Bought four already!" }
]

for (let postIndex in posts) {
    if (posts[postIndex].id === 2) {
        posts.splice(postIndex, 1)
    }
}

console.log(posts)

const postsExtended = [
    {
        id: 1,
        text: "Love this product",
        comments: []
    },
    {
        id: 2,
        text: "This is the worst. DON'T BUY!",
        comments: [
            { id: 1, text: "Idiot has no idea" },
            { id: 2, text: "Fool!" },
            { id: 3, text: "I agree!" }
        ]
    },
    {
        id: 3,
        text: "So glad I found this. Bought four already!",
        comments: []
    }
]

for (let postIndex in postsExtended) {
    const post = postsExtended[postIndex]

    if (post.id === 2) {
        for (let commentIndex in post.comments) {
            if (post.comments[commentIndex].id === 3) {
                post.comments.splice(commentIndex, 1)
            }
        }
    }
}

console.log(postsExtended)

const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
}

for (let dictKey of Object.keys(dictionary)) {
    console.log(`Words that begin with ${dictKey}:`);

    for (let word of dictionary[dictKey]) {
        console.log(`   ${word}`)
    }
}