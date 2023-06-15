const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

function checkReservation(event) {
    event.preventDefault()

    const nameElement = document.getElementById("name-input")
    const name = nameElement.value

    nameElement.value = ""

    if (!(name in reservations)) {
        alert(`Sorry ${name}, you have no reservation`)
        return
    }

    if (reservations[name].claimed) {
        alert("Hm, someone already claimed this reservation")
    } else {
        alert(`Welcome, ${name}`)
    }
}

function setEventsHandlers() {
    const checkButton = document.getElementById("submit-button")
    checkButton.onclick = checkReservation
}

setEventsHandlers()