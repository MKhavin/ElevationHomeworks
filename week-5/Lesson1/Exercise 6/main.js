function pickerClicked() {
    const box = $(".box")
    const currentColor = $(this).data().color

    box.css("background-color", currentColor)
}

function setPickerUI() {
    const pickers = $("#colors").children()

    pickers.each(function () {
        const element = $(this)
        const color = element.data().color

        element.css("background-color", color)
        element.addClass("picker")
        
        element.click(pickerClicked)
    })
}

function main() {
    setPickerUI()
}

main()