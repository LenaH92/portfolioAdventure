import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const FramesPage = () => {
    const { t } = useTranslation()

    const description = t("frames.descriptiveText");
    const backTo = t("frames.backTo")

    return (<><div>
        <p>{description}</p>
        <Link to="/hall">{backTo} </Link>
    </div></>);
}

export default FramesPage;