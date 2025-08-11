const GalleryModal = ({ data, onclose }) => {

    const currentImage = data.images[data.currentIndex];

    return (<div className="modal-overlay" onClick={onclose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button onClick={onclose}>Cerrar</button>
            <img src={currentImage.src} alt={currentImage.alt} />
            <p>{currentImage.alt}</p>
        </div>

    </div>);
}

export default GalleryModal;