import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
    const { t } = useTranslation()

    const description = t("notFound.descriptiveText");
    const backTo = t("notFound.backTo")

    return (<><div>
        <p>{description}</p>
        <p>{backTo} </p>
    </div></>);
}

export default NotFoundPage;