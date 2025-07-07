import { useTranslation } from "react-i18next";

const StudyPage = () => {

    const { t } = useTranslation()

    const description = t("study.descriptiveText");
    const backTo = t("study.backTo")
    const opt1 = t("study.option1");
    const opt2 = t("study.option2");


    return (<><div>
        <p>{description}</p>
        <p>{backTo} </p>
        <div className="optionsDiv">
            <button> {opt1}</button>
            <button> {opt2}</button>
        </div></div></>);
}

export default StudyPage;