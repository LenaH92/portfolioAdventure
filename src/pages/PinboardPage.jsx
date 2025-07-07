import { useTranslation } from "react-i18next";

const PinboardPage = () => {
    const { t } = useTranslation()

    const description = t("pinboard.descriptiveText");
    const backTo = t("pinboard.backTo")

    return (<><div>
        <p>{description}</p>
        <p>{backTo} </p>
    </div></>);
}

export default PinboardPage;