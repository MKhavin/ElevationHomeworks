function Task(props) {
    const completeClicked = () => {
        props.completeClicked(props.task.text)
    }

    return <div>
        <span>{props.task.text} - </span>
        <button onClick={completeClicked}>Complete</button>
    </div >
}

export default Task