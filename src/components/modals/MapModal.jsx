import { useTranslation } from "react-i18next";

const MapModal = ({ onclose }) => {
    const { t } = useTranslation()

    const title = t("map.map")
    const lowerFloor = t("map.lowerFloor")
    const upperFloor = t("map.upperFloor")
    const frames = t("map.frames")
    const diary = t("map.diary")
    const projects = t("map.projects")
    const cv = t("map.cv")

    return (<div className="mapModalDiv">
        <button type="button" onClick={onclose}>X</button>
        <h2>{title}</h2>
    </div>);
}

export default MapModal;