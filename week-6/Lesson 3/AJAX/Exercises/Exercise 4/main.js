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
}

const app = new GiphyModule()
app.getRandomGif((result) => {
  $("#gif-container").attr("src", result.data.embed_url)
})