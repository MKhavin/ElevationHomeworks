const model = Model()
const view = View()

function setEventListeners() {
    $("button").click(() => {
        const newPostData = view.getNewPostData()
        model.addNewPost(newPostData)

        showAllPosts()
        view.clearNewPostInputData()
    })

    $("#posts-list").on("click", ".post", function () {
        const currentPost = $(this).data().id

        model.removePost(currentPost)
        showAllPosts()
    })
}

function showAllPosts() {
    const allPosts = model.getlAllPosts()
    view.renderAllPosts(allPosts)
}

function main() {
    showAllPosts()
    setEventListeners()
}

main()