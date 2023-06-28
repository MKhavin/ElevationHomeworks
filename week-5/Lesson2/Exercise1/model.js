const Model = function () {
    let _post = [
        {
            name: "Mario",
            text: "Super Mario Bros was developed in 1985",
            id: 1
        },
        {
            name: "Zelda",
            text: "The Legend of Zelda was develope by Nintendo in 1987",
            id: 2
        }
    ]

    function getlAllPosts() {
        return structuredClone(_post)
    }

    function uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    function addNewPost(postData) {
        postData.id = uuidv4()
        _post.push(postData)
    }

    function removePost(postId) {
        _post = _post.filter(item => item.id !== postId)
    }

    return {
        getlAllPosts,
        addNewPost,
        removePost
    }
}