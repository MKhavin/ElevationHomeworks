// SpotCheck 1
$("button").click(function() {
    alert($(this).closest("div").find("span").text())
})

// SpotCheck 2
$("#spotcheck-2").click(function() {
    alert($(".container").find("p").text())
})