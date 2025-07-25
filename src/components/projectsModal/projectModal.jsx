function ProjectModal({ project, onClose }) {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <button onClick={onClose}>Cerrar</button>
                <h2>{project.title}</h2>
                <img src={project.image} alt={project.title} />
                <p>{project.description}</p>
                <ul>
                    {project.tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProjectModal