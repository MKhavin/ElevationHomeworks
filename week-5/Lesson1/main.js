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

getHeader()
setCSSStyles()
setCSSStylesViaClass()
$("#set-button").click(setInputValue)