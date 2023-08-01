function Contact(props) {
    const contactClicked = () => {
        props.displayConvo(props.name)
    }

    return <div onClick={contactClicked}>
        <p>{props.name}</p>
    </div>
}

export default Contact