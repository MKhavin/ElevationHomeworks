const playingField = {
    htmlElement: document.getElementById("playing-field"),
    style: getComputedStyle(document.getElementById("playing-field")),
    padding: parseInt(getComputedStyle(document.getElementById("playing-field")).padding),
    height: parseInt(getComputedStyle(document.getElementById("playing-field")).height) - parseInt(getComputedStyle(document.getElementById("playing-field")).padding) * 2,
    width: parseInt(getComputedStyle(document.getElementById("playing-field")).width) - parseInt(getComputedStyle(document.getElementById("playing-field")).padding) * 2
}

const ball = {
    htmlElement: document.getElementById("ball"),
    style: getComputedStyle(document.getElementById("ball")),
    size: parseInt(getComputedStyle(document.getElementById("ball")).height),
    coordinateChangeValue: 20,
    getCurrentValue: function (value, playingFieldValue) {
        if (this.style[value] === "") {
            this.style[value] = `${playingFieldValue - this.size}px`
        }

        return parseInt(this.style[value])
    },
    moveUp: function (playingField) {
        const currentValue = this.getCurrentValue("bottom", playingField.height)
        
        if (currentValue < (playingField.height - this.size)) {
            ball.htmlElement.style.bottom = `${currentValue + this.coordinateChangeValue}px`
        }
    },
    moveLeft: function (playingField) {
        const currentValue = this.getCurrentValue("right", playingField.width)

        if (currentValue < (playingField.width - this.size)) {
            ball.htmlElement.style.right = `${currentValue + this.coordinateChangeValue}px`
        }
    },
    moveRight: function (playingField) {
        const currentValue = this.getCurrentValue("right", playingField.width)

        if ((currentValue - this.coordinateChangeValue) > playingField.padding) {
            ball.htmlElement.style.right = `${currentValue - this.coordinateChangeValue}px`
        }
    },
    moveDown: function (playingField) {
        const arrowsStyle = getComputedStyle(document.getElementById("arrows"))
        const currentValue = this.getCurrentValue("bottom", playingField.height)
      
        if (currentValue > (parseInt(arrowsStyle.height) - parseInt(playingField.padding))) {
            ball.htmlElement.style.bottom = `${currentValue - this.coordinateChangeValue}px`
            console.log("sdadasd")
        }
    }
}

function upArrowClicked() {
    ball.moveUp(playingField)
}

function leftArrowClicked() {
    ball.moveLeft(playingField)
}

function rightArrowClicked() {
    ball.moveRight(playingField)
}

function downArrowClicked() {
    ball.moveDown(playingField)
}

function startGame() {
    const upArrow = document.getElementById("up")
    const leftArrow = document.getElementById("left")
    const rightArrow = document.getElementById("right")
    const downArrow = document.getElementById("down")

    upArrow.onclick = upArrowClicked
    downArrow.onclick = downArrowClicked
    rightArrow.onclick = rightArrowClicked
    leftArrow.onclick = leftArrowClicked
}

startGame()