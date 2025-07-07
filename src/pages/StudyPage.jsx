import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const StudyPage = () => {

    const { t } = useTranslation()
    const navigate = useNavigate()

    const description = t("study.descriptiveText");
    const backTo = t("study.backTo")
    const opt1 = t("study.option1");
    const opt2 = t("study.option2");


    return (<><div>
        <p>{description}</p>
        <p>{backTo} </p>
        <div className="optionsDiv">
            <button onClick={() => navigate("/desk")}> {opt1}</button>
            <button onClick={() => navigate("/pinboard")}> {opt2}</button>
        </div></div></>);
}

export default StudyPage;