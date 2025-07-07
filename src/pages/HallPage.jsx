import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const HallPage = () => {
    const navigate = useNavigate()
    const { t } = useTranslation()

    const description = t("hall.descriptiveText");
    const backTo = t("hall.backTo")
    const opt1 = t("hall.option1");
    const opt2 = t("hall.option2");


    return (<><div>
        <p>{description}</p>
        <p>{backTo} </p>
        <div className="optionsDiv">
            <button onClick={() => navigate("/frames")}> {opt1}</button>
            <button onClick={() => window.open("https://www.linkedin.com/in/lena-webdeveloper/", "_blank")}> {opt2}</button>
        </div></div></>);
}

export default HallPage;