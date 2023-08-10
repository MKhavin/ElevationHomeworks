const wisdomInput = document.getElementsByClassName("wisdom-input")[0]
const wisdomContainer = document.getElementsByClassName("wisdom-list")[0]
let savedWisdom = []
let lastId = 0

function loadSavedWisdom() {
    const localStorageData = JSON.parse(localStorage.getItem("wisdom"))

    if (savedWisdom.length === 0 && localStorageData !== null) {
        savedWisdom = JSON.parse(localStorage.getItem("wisdom"))
    }

    wisdomContainer.innerHTML = ""
    savedWisdom.forEach(wisdom => {
        const newLi = document.createElement("li")
        newLi.textContent = wisdom.text
        newLi.setAttribute("id", wisdom.id)

        const deleteLiButton = document.createElement("button")
        deleteLiButton.className = "delete-wisdom"
        deleteLiButton.textContent = "X"

        lastId = wisdom.id

        newLi.appendChild(deleteLiButton)

        wisdomContainer.appendChild(newLi)
    });
}

function clearSavedDataClicked() {
    savedWisdom = []
    localStorage.removeItem("wisdom")
    loadSavedWisdom()
}

function saveWisdom() {
    lastId += 1
    const currentWisdom = { text: wisdomInput.value, id: lastId }

    wisdomInput.value = ""

    savedWisdom.push(currentWisdom)
}

function deleteWisdom(event) {
    const parentEl = event.target.parentElement
    const wisdomId = Number(parentEl.id)

    savedWisdom = savedWisdom.filter(wisdom => wisdom.id !== wisdomId)
    localStorage.setItem("wisdom", JSON.stringify(savedWisdom))
    loadPage()
}

function submitButtonClicked() {
    saveWisdom()
    localStorage.setItem("wisdom", JSON.stringify(savedWisdom))
    loadPage()
}

function addEventListeners() {
    const submitButton = document.getElementsByClassName("submit-button")[0]
    submitButton.addEventListener("click", submitButtonClicked)

    const clearSavedDataButton = document.getElementsByClassName("clear-saved-data-button")[0]
    clearSavedDataButton.addEventListener("click", clearSavedDataClicked)

    const deleteWisdomButtons = document.getElementsByClassName("delete-wisdom")
    for (button of deleteWisdomButtons) {
        button.addEventListener("click", deleteWisdom)
    }
}

function loadPage() {
    loadSavedWisdom()
    addEventListeners()
}

loadPage()