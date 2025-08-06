function ProjectModal({ data, onclose }) {
    return (
        <div className="modal-overlay" onClick={onclose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button onClick={onclose}>Cerrar</button>
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