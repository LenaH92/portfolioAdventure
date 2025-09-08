import { useModal } from "../contexts/ModalContext";
import ProjectModal from "./modals/ProjectModal";
import GalleryModal from "./modals/GalleryModal"
import MapModal from "./modals/MapModal";

const ModalContainer = () => {
    const { modal, closeModal } = useModal();

    if (!modal.type) return null;

    const modalProps = { onclose: closeModal, data: modal.data }

    switch (modal.type) {
        case 'project':
            return <ProjectModal {...modalProps} />
        case 'cv':
            return <CvModal {...modalProps} />;
        case 'gallery':
            return <GalleryModal {...modalProps} />;
        case 'map':
            return <MapModal {...modalProps} />;
        default:
            return null;
    }
}

export default ModalContainer;