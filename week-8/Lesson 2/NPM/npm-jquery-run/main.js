function boxClicked(event) {
  $(this).css("background-color", "#f39c12");
}

$(document).ready(() => $(".box").click(boxClicked));
$.get("http://data.nba.net/10s/prod/v1/2016/players.json")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
