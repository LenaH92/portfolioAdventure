import { useTranslation } from "react-i18next";
import LanguageSwitch from "./LanguageSwitch";
import { useModal } from "../contexts/ModalContext";

const Navbar = () => {

    const { t } = useTranslation()
    const map = t("map.map")
    const { openModal } = useModal()


    return (<>
        <LanguageSwitch />
        <div>
            <button type="button" onClick={() => openModal("map")}>{map} </button>
            {/* will pobably need to make a component just fo the map button so language chages (?)
            !! Need also to ceate the map language inputs in jsons :D */}
        </div>
    </>);
}

export default Navbar;