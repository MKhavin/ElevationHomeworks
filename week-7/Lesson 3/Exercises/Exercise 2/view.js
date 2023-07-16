class View {
  loadView() {
    $("#books-list").empty();
    $("#gif-container").attr("src", "");
  }

  renderBooks(books) {
    $("#books-list").empty();

    const booksContainer = $("#books-list");

    books.forEach((book) => {
      booksContainer.append(`<li>${book}</li>`);
    });
  }

  renderGif(gif) {
    $("#gif-container").attr("src", gif);
  }
}
