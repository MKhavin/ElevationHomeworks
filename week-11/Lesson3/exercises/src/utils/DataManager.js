class DataManager {
    async #getPosts() {
        const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
        const postsData = await posts.json()

        return postsData
    }

    async getFirstTenPosts(callback) {
        const postsData = await this.#getPosts()
        const firstTenPosts = postsData.slice(0, 10)

        callback(firstTenPosts)
    }
}

export default DataManager