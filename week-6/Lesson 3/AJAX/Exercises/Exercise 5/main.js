class GiphyModule {
  constructor() {
    this._apiKey = "hJfmcsWXwTCTaDDPSMCLu5JV5lglbNPN"
  }

  getRandomGif(callback) {
    $.ajax({
      url: `https://api.giphy.com/v1/gifs/random?api_key=${this._apiKey}`,
      method: "GET",
      success: callback,
      error: function (xhr, error, text) {
        console.log("Error")
      }
    })
  }

  getGifByUser(searchData, callback) {
    $.ajax({
      url: `https://api.giphy.com/v1/gifs/search?api_key=${this._apiKey}&q=${searchData}`,
      method: "GET",
      success: callback,
      error: function (xhr, error, text) {
        console.log("Error")
      }
    })
  }
}

function renderGif(result) {
  let gifURL = result.data.embed_url

  if (Array.isArray(result.data)) {
    gifURL = result.data[0].embed_url
  }

  $("#gif-container").attr("src", gifURL)
}

function searchButtonClicked(event) {
  event.preventDefault()

  const searchData = $("#search-input").val()
  app.getGifByUser(searchData, renderGif)
}

const app = new GiphyModule()
app.getRandomGif(renderGif)

$("#search-button").click(searchButtonClicked)