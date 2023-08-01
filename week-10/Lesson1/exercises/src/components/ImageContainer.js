function ImageContainer(props) {
    const previousImageClicked = () => {
        let currentImage = props.currentImage - 1
        props.setCurrentImage(currentImage < 0 ? props.imagesCount : currentImage)
    }

    const nextImageClicked = () => {
        let currentImage = props.currentImage + 1
        props.setCurrentImage(currentImage > props.imagesCount ? 0 : currentImage)
    }

    return (<div>
        <button onClick={previousImageClicked}>Previous</button>
        <img src={props.imgSrc} alt={props.imgSrc}></img>
        <button onClick={nextImageClicked}>Next</button>
    </div>)
}

export default ImageContainer