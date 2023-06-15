"use strict"

function generateColorBoxes() {
    const mainContainer = document.getElementById("container")

    for (let i = 0; i <= 10; i++) {
        const newColorBox = document.createElement("div")
        newColorBox.setAttribute("class", "container-item")
        newColorBox.onmouseenter = colorBoxHovered
        newColorBox.style.backgroundColor = getNewColor("")

        mainContainer.appendChild(newColorBox)
    }
}

function colorBoxHovered(event) {
    const currentColor = event.target.style.backgroundColor || ""
    
    event.target.style.backgroundColor = getNewColor(currentColor)

    checkSameColorOfContainerColorBoxes()
}

function getNewColor(currentColor) {
    const colors = ["#001219", "#005f73", "#0a9396", "#94d2bd", "#ee9b00", "#ca6702", "#bb3e03", "#9b2226"]

    const randomIndex = Math.trunc(Math.random() * (colors.length - 1)) + 1
    const randomColor = colors[randomIndex]

    if (randomColor === currentColor) {
        return getNewColor(currentColor)
    }

    return randomColor
}

function checkSameColorOfContainerColorBoxes() {
    const mainContainer = document.getElementById("container")
    const colorBoxes = mainContainer.getElementsByClassName("container-item")
    let areSameColor = true

    for (let i = 0; i < colorBoxes.length - 1; i++) {
        if (colorBoxes[i].style.backgroundColor !== colorBoxes[i+1].style.backgroundColor) {
            areSameColor = false
            break
        }
    }

    const existingMessage = document.getElementById("message")
    if (existingMessage) {
        document.body.removeChild(existingMessage)
    }

    if (areSameColor) {
        const newMessage = document.createElement("h1")
        newMessage.textContent = "Nice Job !!!!"
        newMessage.style.textAlign = "center"
        newMessage.setAttribute("id", "message")     

        document.body.appendChild(newMessage)
    }
}

generateColorBoxes()