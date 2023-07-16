class APIModel {
  #apiKey = "hJfmcsWXwTCTaDDPSMCLu5JV5lglbNPN";

  getBooksWithRandomWordInTitle(callback) {
    this.#getRandomWordApiCall()
      .then((result) => {
        const word = this.#getRandomWord(result);

        return this.#getBooksByWordInTitleApiCall(word);
      })
      .catch((error) => {
        console.log(error.message);
        callback(null, error.message);
      })
      .then((result) => this.#getBooksByWordInTitle(result, callback))
      .catch((error) => {
        console.log(error.message);
        callback(null, error.message);
      });
  }

  getBooksAndGifsViaRandomWord(callback) {
    const data = {
      books: [],
      gif: "",
    };

    this.#getRandomWordApiCall().then((result) => {
      Promise.all([
        this.#getBooksByWordInTitleApiCall(this.#getRandomWord(result)),
        this.#getGifByWordApiCall(result),
      ])
        .then((result) => {
          this.#getBooksByWordInTitle(result[0], (result) => {
            data.books = result;
          });

          this.#getGifByWord(result[1], (result) => (data.gif = result));

          callback(data);
        })
        .catch((error) => {
          console.log(error.message);
          callback(data, error.message);
        });
    });
  }

  #getRandomWordApiCall() {
    return $.get("https://random-word-api.herokuapp.com/word");
  }

  #getRandomWord(result) {
    if (!Array.isArray(result) || result.length === 0) {
      throw new Error("Data is incorrect.");
    }

    return result[0];
  }

  #getBooksByWordInTitleApiCall(word) {
    return $.get(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`
    );
  }

  #getBooksByWordInTitle(result, callback) {
    if (!("items" in result) || result.items.length === 0) {
      throw new Error(`Books not found`);
    }

    const booksTitles = result.items.map((item) => {
      return item.volumeInfo.title;
    });

    callback(booksTitles);
  }

  #getGifByWordApiCall(word) {
    return $.get(
      `https://api.giphy.com/v1/gifs/random?api_key=${
        this.#apiKey
      }&tag=${word}&rating=g`
    );
  }

  #getGifByWord(result, callback) {
    if (
      !("data" in result) ||
      !("embed_url" in result.data) ||
      result.data.embed_url === ""
    ) {
      throw new Error("Gif not found");
    }

    const gifURL = result.data.embed_url;

    callback(gifURL);
  }
}
