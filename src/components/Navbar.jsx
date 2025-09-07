import { useTranslation } from "react-i18next";
import LanguageSwitch from "./LanguageSwitch";

const Navbar = () => {

    const { t } = useTranslation()
    const map = t("map.map")


    return (<>
        <LanguageSwitch />
        <div>
            <p>{map}</p>
            {/* will pobably need to make a component just fo the map button so language chages (?)
            !! Need also to ceate the map language inputs in jsons :D */}
        </div>
    </>);
}

export default Navbar;