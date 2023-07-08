function renderBooks(data) {
  const booksParent = $("#books");

  if ("items" in data) {
    data.items.forEach((bookData) => {
      booksParent.append(`<li>${bookData.volumeInfo.industryIdentifiers[0].identifier} - ${bookData.volumeInfo.title}</li>`);
    });
  }
}

function fetchBookByISBN(isbn) {
  $.get(
    `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
    renderBooks
  );
}

fetchBookByISBN("9782806269171");
fetchBookByISBN("1440633908");
fetchBookByISBN("9781945048470");
fetchBookByISBN("9780307417138");
