import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    const { t } = useTranslation()

    const description = t("notFound.descriptiveText");
    const backTo = t("notFound.backTo")

    return (<><div>
        <p>{description}</p>
        <Link to="/hall">{backTo} </Link>
    </div></>);
}

export default NotFoundPage;