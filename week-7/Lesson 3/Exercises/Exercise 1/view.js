class View {
  loadView() {
    $("#books-list").empty()
  }

  renderBooks(books) {
    this.loadView()
    
    const booksContainer = $("#books-list");

    books.forEach((book) => {
      booksContainer.append(`<li>${book}</li>`);
    });
  }
}
