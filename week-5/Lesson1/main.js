function getHeader() {
  const header = $("#header");

  console.log(header);
}

function setCSSStyles() {
  const redDiv = $(".red-div")
  const firstLi = $("ul > li:first-child")
  const lastLi = $("ul > li:last-child")
  const brownDiv = $("#brown-div")
  const h1 = $("h1")

  redDiv.css("background-color", "red")
  brownDiv.css("background-color", "brown")
  firstLi.css("background-color", "green")
  lastLi.css("background-color", "pink")
  h1.css("background-color", "blue")
}

function setCSSStylesViaClass() {
  const firstDiv = $("#b1")
  const secondDiv = $("#b2")

  firstDiv.addClass("box")
  secondDiv.addClass("box")
}

function setInputValue() {
  $("#my-input").val("Terabyte")
}

function logBarcodeData() {
  const barcodeData = $("#barcode").data()

  console.log(`The item with barcode ${barcodeData.barcode} will expire on ${barcodeData.expirationDate}`)
}

function setHoverEventListener() {
  function elementHovered(event) {
    const target = $(event.target)
    target.addClass("blue-background-color")
  }

  function elementUnhovered(event) {
    const target = $(event.target)
    target.removeClass("blue-background-color")
  }

  const hoverElement = $("#hover")
  hoverElement.css("width", "100px")
  hoverElement.css("height", "100px")

  hoverElement.on("mouseenter", elementHovered)
  hoverElement.on("mouseleave", elementUnhovered)
}

function setClickEventListener() {
  function elementClicked(event) {
    alert($("#my-second-input").val())
  }

  $("#alert-button").click(elementClicked)
}

function setBoxHoverEventListener() {
  $(".box").on("mouseenter", function () { $(this).css("background-color", "blue") })
  $(".box").on("mouseleave", function () { $(this).css("background-color", "") })
}

function setFeedMeFunctionality() {
  $(".feedme").on("click", function () {
    let divCopy = `<div class=feedme>${$(this).text()}</div>`
    $("body").append(divCopy)
  })
}

function addElementsInLoop() {
  const names = [
    { first: "Alex", last: "Johnson" },
    { first: "Byron", last: "Loveall" },
    { first: "Cassandra", last: "Wuthers" },
    { first: "Deandre", last: "Rahm" },
    { first: "Ellena", last: "Freeman" }
  ]

  names.forEach(value => $("#spotcheck-10").append(`<p>${value.first} - ${value.last}</p>`))
}

function setPoofFunctionality() {
  $("#poof").on("mouseenter", function () { $(this).remove() })
}

function addBlogFunctionality() {
  $("#post-blog").click(function () {
    const newEl = $("<div class='blog'>New blog</div>")
    $("#blogs").append(newEl)

    // newEl.on("mouseenter", function () {
    //   $(this).text("blargh")
    //   console.log("text")
    // })
  })

  $("#blogs").on("mouseenter", ".blog", function () {
    $(this).text("blargh")
    console.log("text")
  })
}

getHeader()
setCSSStyles()
setCSSStylesViaClass()
$("#set-button").click(setInputValue)
logBarcodeData()
setHoverEventListener()
setClickEventListener()
setBoxHoverEventListener()
setFeedMeFunctionality()
addElementsInLoop()
setPoofFunctionality()
addBlogFunctionality()