function addNewHumanName() {
    const currentInputValue = $("#human-name-input").val()
    
    $("#human-list").append(`<li>${currentInputValue}</li>`)

    $("#human-name-input").val("")
}

function setWebApp() {
    $("#add-human").click(addNewHumanName)
}

setWebApp()