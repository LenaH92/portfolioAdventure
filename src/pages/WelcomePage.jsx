import { useTranslation } from "react-i18next";

const WelcomePage = () => {

    const { t } = useTranslation()

    const description = t("welcomeScreen.descriptiveText");
    const opt1 = t("welcomeScreen.option1");
    const opt2 = t("welcomeScreen.option2");


    return (<><div>
        <p>{description}</p>
        <div className="optionsDiv">
            <button> {opt1}</button>
            <button> {opt2}</button>
        </div></div></>);
}

export default WelcomePage;