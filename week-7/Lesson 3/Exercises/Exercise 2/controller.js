class Controller {
  #model;
  #view;

  constructor() {
    this.#model = new APIModel();
    this.#view = new View();
  }

  loadView() {
    this.#view.loadView();
    $("#load-books-button").click(this.#loadBooksButtonClicked.bind(this));
    $("#load-books-and-gif-button").click(
      this.#loadBooksAndGifButtonClicked.bind(this)
    );
  }

  showBooksWithRandomWordInTitle() {
    this.#model.getBooksWithRandomWordInTitle(
      this.#processBooksData.bind(this)
    );
  }

  showBooksWithRandomWordInTitleAndGif() {
    this.#model.getBooksAndGifsViaRandomWord(
      this.#processBooksAndGifData.bind(this)
    );
  }

  #processBooksData(data, error) {
    if (data === null) {
      alert(error);
      return;
    }

    this.#view.renderBooks.call(this.#view, data);
  }

  #processBooksAndGifData(data, error) {
    if (error !== undefined) {
      alert(error);
    }

    this.#view.renderBooks.call(this.#view, data.books);
    this.#view.renderGif.call(this.#view, data.gif);
  }

  #loadBooksButtonClicked(event) {
    this.showBooksWithRandomWordInTitle();
  }

  #loadBooksAndGifButtonClicked(event) {
    this.showBooksWithRandomWordInTitleAndGif();
  }
}
