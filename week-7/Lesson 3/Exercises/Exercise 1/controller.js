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

    #processBooksData(data, error) {
        if (data === null) {
            alert(error)
            return
        }

        this.#view.renderBooks.call(this.#view, data)
    }

    #loadBooksButtonClicked(event) {
        this.showBooksWithRandomWordInTitle()
    }
}