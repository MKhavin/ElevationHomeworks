import { useState, useEffect } from "react"
import DataManager from "../utils/DataManager"
import Post from "./Post"
import "../css/Posts.css"

function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const datatManager = new DataManager()
        datatManager.getFirstTenPosts(setPosts)

        // return () => {
        //     second
        // }
    }, [])

    return <div>
        <h1>Top Posts</h1>
        <div className="posts-container">
            {posts.map(post => <Post postData={post} key={post.id} />)}
        </div>
    </div>
}

export default Posts