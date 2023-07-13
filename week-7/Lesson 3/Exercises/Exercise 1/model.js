class APIModel {
  getBooksWithRandomWordInTitle(callback) {
    $.get("https://random-word-api.herokuapp.com/word")
      .then((result) => {
        if (!Array.isArray(result) || result.length === 0) {
          throw new Error("Data is incorrect.");
        }

        const word = result[0];
        return $.get(
          `https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`
        );
      })
      .catch((error) => {
        console.log(error.message);
        callback(null, error.message);
      })
      .then((result) => {
        if ("items" in result && result.items.length > 0) {
          const booksTitles = result.items.map((item) => {
            return item.volumeInfo.title;
          });

          callback(booksTitles);
        } else {
          throw new Error(`Books not found`);
        }
      })
      .catch((error) => {
        console.log(error.message);
        callback(null, error.message);
      });
  }
}
