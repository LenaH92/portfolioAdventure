import { useTranslation } from "react-i18next";

const FramesPage = () => {
    const { t } = useTranslation()

    const description = t("frames.descriptiveText");
    const backTo = t("frames.backTo")

    return (<><div>
        <p>{description}</p>
        <p>{backTo} </p>
    </div></>);
}

export default FramesPage;