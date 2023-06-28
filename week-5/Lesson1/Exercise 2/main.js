function addNewHumanName() {
    const currentInputValue = $("#human-name-input").val()
    
    $("#human-list").append(`<li class='human-item'>${currentInputValue}</li>`)

    $("#human-name-input").val("")
}

function removeHumanName() {
    $(this).remove()
}

function setWebApp() {
    $("#add-human").click(addNewHumanName)
    $("#human-list").on("click", ".human-item", removeHumanName)
}

setWebApp()