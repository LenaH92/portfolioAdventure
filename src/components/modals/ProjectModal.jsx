function ProjectModal({ data, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose}>Cerrar</button>
                <h2>{data.title}</h2>
                <img src={data.image} alt={data.title} />
                <p>{data.description}</p>
                <ul>
                    {data.tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProjectModal