
const ImageContainer = () => {
    const imagePath = 'src/assets/defaultImage.png';

    return <img src={imagePath} alt='default image' width={200}/>

    // return <div className="js-image-container"></div>;
}

export default ImageContainer;