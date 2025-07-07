import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const DeskPage = () => {
    const { t } = useTranslation()

    const description = t("desk.descriptiveText");
    const backTo = t("desk.backTo")

    return (<><div>
        <p>{description}</p>
        <Link to="/study">{backTo} </Link>
    </div></>);
}

export default DeskPage;