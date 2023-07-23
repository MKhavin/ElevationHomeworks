function handleComplaint(complaint) {
    switch (complaint.type) {
        case "finance":
            console.log("Money doesn't grow on trees, you know.")
            break
        case "weather":
            console.log("It is the way of nature. Not much to be done.")
            break
        case "emotions":
            console.log("It’ll pass, as all things do, with time.")
            break
        default:
            break
    }
}

export default handleComplaint