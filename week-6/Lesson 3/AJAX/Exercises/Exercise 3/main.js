function parseBookData(bookData) {
  let isbn = "...";
  if ("industryIdentifiers" in bookData.volumeInfo) {
    isbn = bookData.volumeInfo.industryIdentifiers[0].identifier;
  }

  let authors = "authors unknown";
  if ("authors" in bookData.volumeInfo) {
    authors = "";

    bookData.volumeInfo.authors.forEach((author) => {
      authors += author + ", ";
    });

    authors = authors.slice(0, -2);
  }

  return {
    isbn,
    authors,
    title: bookData.volumeInfo.title
  };
}

function renderBooks(data) {
  const booksParent = $("#books");

  if ("items" in data) {
    data.items.forEach((bookData) => {
      const parsedData = parseBookData(bookData)

      booksParent.append(
        `<li>${parsedData.isbn} - ${parsedData.authors} - ${parsedData.title}</li>`
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
