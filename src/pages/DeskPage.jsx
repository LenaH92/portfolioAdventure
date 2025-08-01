import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import ProjectModal from "../components/modals/ProjectModal"
import { useState } from "react";
import { useModal } from "../contexts/ModalContext";


const DeskPage = () => {
    const { t } = useTranslation()

    const description = t("desk.descriptiveText");
    const backTo = t("desk.backTo")
    const projects = t("desk.projects", { returnObjects: true })

    const [selectedProject, setSelectedProject] = useState(null)

    const { openModal } = useModal()


    return (<><div>
        <p>{description}</p>
        <div className="projectListDiv">
            {projects.map((project) => (
                <div key={project.id} className="card" onClick={() => openModal('project', project)}>
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