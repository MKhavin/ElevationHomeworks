function generateComputerData(event, dataContainer) {
    const computerContainer = (dataContainer === undefined ? $(this).closest(".computer") : dataContainer)

    console.log(
        `
        Processor ID: ${computerContainer.find(".processor")[0].id}
        Computer data-id: ${computerContainer.data().id}
        Bus number: ${computerContainer.find(".BUS").text()}
        `
    )
}

$(".generator").click(generateComputerData)

$(".validator").click(function (event) {
    const computerContainer = $(this).closest(".computer")
    generateComputerData.call(this, event, computerContainer)
    console.log(
        `
        MB: ${computerContainer.find(".MB").text()}
        Computer data-id: ${computerContainer.data().id}
        `
    )
    computerContainer.find(".QR").each(function () {
        console.log(`
        QR: ${$(this).text()}
        `)
    });
})
