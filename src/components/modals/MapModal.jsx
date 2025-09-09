import { useTranslation } from "react-i18next";
import lowerFloorMap from "../../assets/LowerFloor.png"
import upperFloorMap from "../../assets/UpperFloor.png"

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
                <div className="mapContainer">
                    <img src={lowerFloorMap} alt={lowerFloor} useMap="#lowerFloorMap" className="mapImg" />
                    <map name="lowerFloorMap">
                        <area shape="rect" coords="0,0,500,250" href="/frames" alt="frames" />
                        <area shape="rect" coords="0, 250, 500, 500" href="https://www.linkedin.com/in/lena-webdeveloper/" alt="Diary" />
                    </map>
                </div>
            </div>
            <div className="upperFloor">
                <h3>{upperFloor}</h3>
                <div className="mapContainer">
                    <img src={upperFloorMap} alt={upperFloor} useMap="#upperFloorMap" className="mapImg" />
                    <map name="upperFloorMap">
                        <area shape="rect" coords="0,0,500,250" href="/cv" alt="CV" />
                        <area shape="rect" coords="0, 250, 500, 500" href="/desk" alt="desk" />
                    </map>
                </div>
            </div>
        </div>

    </div>);
}

export default MapModal;