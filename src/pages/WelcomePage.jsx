import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {

    const { t } = useTranslation()
    const navigate = useNavigate()

    const description = t("welcomeScreen.descriptiveText");
    const opt1 = t("welcomeScreen.option1");
    const opt2 = t("welcomeScreen.option2");


    return (<><div>
        <p>{description}</p>
        <div className="optionsDiv">
            <button onClick={() => navigate("/hall")}> {opt1}</button>
            <button onClick={() => navigate("/study")}> {opt2}</button>
        </div></div></>);
}

export default WelcomePage;