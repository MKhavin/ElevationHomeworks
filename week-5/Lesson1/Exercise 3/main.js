function setUI() {
    const boxQuantity = 2

    for (let i = 0; i < 2; i++) {
        $("body").append("<div class='box'></div>")
    }
}

function setBoxHoverListener() {
    $(".box").on("mouseleave", function () {
        $(this).addClass("orange-background-color")
    })

    $(".box").on("mouseenter", function () {
        $(this).removeClass("orange-background-color")
    })
}

function setWebApp() {
    setUI()
    setBoxHoverListener()
}


setWebApp()