import { useTranslation } from "react-i18next";
import lowerFloorMap from "../../assets/LowerFloor.png"
import upperFloorMap from "../../assets/UpperFloor.png"
import './mapModalCss.css'
import { useNavigate } from "react-router-dom";

const MapModal = ({ onClose }) => {
    const { t } = useTranslation()
    const navigate = useNavigate()

    const title = t("map.map")
    const lowerFloor = t("map.lowerFloor")
    const upperFloor = t("map.upperFloor")
    const frames = t("map.frames")
    const diary = t("map.diary")
    const projects = t("map.projects")
    const cv = t("map.cv")

    function handleMapClick(place) {
        navigate(place);
        onClose()
    }

    return (<div className="mapModalDiv modal-overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={onClose}>X</button>
            <h2>{title}</h2>
            <div className="floorsMapsContainer">
                <div className="lowerFloor">
                    <h3>{lowerFloor} </h3>
                    <div className="mapContainer">
                        <img src={lowerFloorMap} alt={lowerFloor} className="mapImg" />
                        <span
                            className="clickArea top"
                            onClick={() => handleMapClick("/frames")}>
                            {frames}
                        </span>


                        <span
                            className="clickArea bottom"
                            onClick={() =>
                                window.open("https://www.linkedin.com/in/lena-webdeveloper/", "_blank")
                            }>{diary} </span>

                    </div>
                </div>
                <div className="upperFloor">
                    <h3>{upperFloor}</h3>
                    <div className="mapContainer">
                        <img src={upperFloorMap} alt={upperFloor} className="mapImg" />
                        <span
                            className="clickArea top"
                            onClick={() => handleMapClick("/cv")}>{cv} </span>

                        <span
                            className="clickArea bottom"
                            onClick={() => handleMapClick("/desk")}>{projects} </span>

                    </div>
                </div>
            </div>

        </div>

    </div>);
}

export default MapModal;