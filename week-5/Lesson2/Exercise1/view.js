const View = function () {
    function renderAllPosts(posts) {
        const parentEl = $("#posts-list")
        parentEl.empty()

        posts.forEach(element => {
            const newPost = $(`
            <div class='post' data-id=${element.id}>
            <h1>${element.name}</h1>
            <p>${element.text}</p>
            </div>
            `)

            parentEl.append(newPost)
        });
    }

    function getNewPostData() {
        return {
            name: $("#name").val(),
            text: $("#text").val()
        }
    }

    function clearNewPostInputData() {
        $("#name").val("")
        $("#text").val("")
    }

    return {
        renderAllPosts,
        getNewPostData,
        clearNewPostInputData
    }
}