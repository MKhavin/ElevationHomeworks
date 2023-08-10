import "../css/Post.css"

function Post({ postData: { title, body } }) {
    return <div className="post">
        <h1>{title}</h1>
        <p>{body}</p>
    </div>
}

export default Post