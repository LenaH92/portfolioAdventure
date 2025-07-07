import { useTranslation } from "react-i18next";

const DeskPage = () => {
    const { t } = useTranslation()

    const description = t("desk.descriptiveText");
    const backTo = t("desk.backTo")

    return (<><div>
        <p>{description}</p>
        <p>{backTo} </p>
    </div></>);
}

export default DeskPage;