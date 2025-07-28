const GalleryModal = ({ data, onclose }) => {
    return (<div className="modal-overlay" onClick={onclose}>
        <div className="modal">
            <button onClick={onclose}>Cerrar</button>
            <img src={data} alt="Imagen seleccionada" />
        </div>

    </div>);
}

export default GalleryModal;