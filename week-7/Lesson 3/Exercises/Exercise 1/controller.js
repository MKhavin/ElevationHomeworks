class Controller {
    #model
    #view

    constructor() {
        this.#model = new APIModel()
        this.#view = new View()
    }

    loadView() {
        this.#view.loadView()
        $("#load-books-button").click(this.#loadBooksButtonClicked.bind(this))
    }

    showBooksWithRandomWordInTitle() {
        this.#model.getBooksWithRandomWordInTitle(this.#processBooksData.bind(this))
    }

    #processBooksData(booksData, error) {
        if (booksData === null) {
            alert(error)
            return
        }

        this.#view.renderBooks.call(this.#view, booksData)
    }

    #loadBooksButtonClicked(event) {
        this.showBooksWithRandomWordInTitle()
    }
}