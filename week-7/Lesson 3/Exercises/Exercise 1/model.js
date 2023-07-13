class APIModel {
  getBooksWithRandomWordInTitle(callback) {
    $.get("https://random-word-api.herokuapp.com/word")
      .then(this.#getBooksByWord)
      .catch(error => this.#handleError(error, callback))
      .then(result => {
        const bookTitles = this.#getBooksTitle(result)
        callback(bookTitles)
      })
      .catch(error => this.#handleError(error, callback));
  }

  #getBooksByWord(words) {
    if (!Array.isArray(words) || words.length === 0) {
      throw new Error("Data is incorrect.");
    }

    const word = words[0];
    return $.get(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`
    );
  }

  #getBooksTitle(books, callback) {
    if ("items" in books && books.items.length > 0) {
      const booksTitles = books.items.map((item) => {
        return item.volumeInfo.title;
      });

      return booksTitles;
    } else {
      throw new Error(`Books not found`);
    }
  }

  #handleError(error, callback) {
    console.log(error.message);
    callback(null, error.message);
  }
}
