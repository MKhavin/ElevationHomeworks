// SpotCheck 2
var classData = {
    classmates: [
        { name: "That on gal", description: "Always has the ansswer" },
        { name: "The weird dude", description: "Quick with a smile" },
        { name: "Taylor", description: "Just Taylor" }
    ]
}

const source = $("#class-template").html()
const classTemplate = Handlebars.compile(source)
const element = classTemplate(classData)
$("body").append(element)

// SpotCheck 3
const menuData = {
    menu: [
        { name: "Google", link: "http://google.com", socialNetwork: false },
        { name: "Facebook", link: "http://facebook.com", socialNetwork: true },
        { name: "Instagram", link: "http://nstagram.com", socialNetwork: true },
        { name: "Twitter", link: "http://twitter.com", socialNetwork: true }
    ]
};

const source2 = $("#menu-template").html()
const menuTemplate = Handlebars.compile(source2)
const newMenu = menuTemplate(menuData)

// append our new html to the page
$('.menu').append(newMenu);


// SpotCheck 4
const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]
const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]

const animalsSource = $("#animals-template").html()
const animalsTemplate = Handlebars.compile(animalsSource)
const newAnimalsContainer = animalsTemplate({ animals: animals })
$("body").append(newAnimalsContainer)

const languagesSource = $("#languages-template").html()
const languagesTemplate = Handlebars.compile(languagesSource)
const newLanguagesContainer = languagesTemplate({ languages: languages })
$("body").append(newLanguagesContainer)