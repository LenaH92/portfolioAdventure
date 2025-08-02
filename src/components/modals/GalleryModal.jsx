const GalleryModal = ({ data, onclose }) => {
    return (<div className="modal-overlay" onClick={onclose}>
        <div className="modal">
            <button onClick={onclose}>Cerrar</button>
            <img src={data.src} alt={data.alt} />
            <p>{data.alt}</p>
        </div>

    </div>);
}

export default GalleryModal;