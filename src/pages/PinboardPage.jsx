import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PinboardPage = () => {
    const { t } = useTranslation()

    const description = t("pinboard.descriptiveText");
    const backTo = t("pinboard.backTo")

    return (<><div>
        <p>{description}</p>
        <Link to="/study">{backTo} </Link>
    </div></>);
}

export default PinboardPage;