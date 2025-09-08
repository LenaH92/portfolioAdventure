import { useTranslation } from "react-i18next";

const MapModal = ({ onClose }) => {
    const { t } = useTranslation()

    const title = t("map.map")
    const lowerFloor = t("map.lowerFloor")
    const upperFloor = t("map.upperFloor")
    const frames = t("map.frames")
    const diary = t("map.diary")
    const projects = t("map.projects")
    const cv = t("map.cv")

    return (<div className="mapModalDiv modal-overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={onClose}>X</button>
            <h2>{title}</h2>
            <div className="loweFloor">
                <h3>{lowerFloor} </h3>
            </div>
            <div className="upperFloor">
                <h3>{upperFloor}</h3>
            </div>
        </div>

    </div>);
}

export default MapModal;