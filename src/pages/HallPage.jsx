import { useTranslation } from "react-i18next";

const HallPage = () => {

    const { t } = useTranslation()

    const description = t("hall.descriptiveText");
    const backTo = t("hall.backTo")
    const opt1 = t("hall.option1");
    const opt2 = t("hall.option2");


    return (<><div>
        <p>{description}</p>
        <p>{backTo} </p>
        <div className="optionsDiv">
            <button> {opt1}</button>
            <button> {opt2}</button>
        </div></div></>);
}

export default HallPage;