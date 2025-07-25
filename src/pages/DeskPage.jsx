import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

//import projectsJson from "../components/projectsModal/projectsJson.json"
import ProjectModal from "../components/projectsModal/ProjectModal"
import { useState } from "react";


const DeskPage = () => {
    const { t } = useTranslation()

    const description = t("desk.descriptiveText");
    const backTo = t("desk.backTo")
    const projects = t("desk.projects", { returnObjects: true })

    const [selectedProject, setSelectedProject] = useState(null)
    function openModal(proejct) {
        setSelectedProject(proejct)
    }
    function closeModal() {
        setSelectedProject(null)
    }

    return (<><div>
        <p>{description}</p>
        <div className="projectListDiv">
            {projects.map((project) => (
                <div key={project.id} className="card" onClick={() => openModal(project)}>
                    <img src={project.image} alt={project.title} />
                    <h3>{project.title}</h3>
                </div>
            ))}
        </div>
        <Link to="/study">{backTo} </Link>
        {selectedProject && (
            <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
    </div ></>);
}

export default DeskPage;