function renderBooks(data) {
  const booksParent = $("#books");

  if ("items" in data) {
    data.items.forEach((bookData) => {
      let isbn = "...";
      if ("industryIdentifiers" in bookData.volumeInfo) {
        isbn = bookData.volumeInfo.industryIdentifiers[0].identifier;
      }

      booksParent.append(
        `<li>${isbn} - ${bookData.volumeInfo.title}</li>`
      );
    });
  }
}

function fetchBookByISBN(queryType, queryValue) {
  $.get(
    `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
    renderBooks
  );
}

fetchBookByISBN("isbn", 9789814561778);
fetchBookByISBN("title", "How to Win Friends and Influence People");
