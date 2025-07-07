import { useLanguage } from "../contexts/LanguageContext";

const LanguageSwitch = () => {

    const { changeLanguage } = useLanguage()

    function switchLang(lang) {
        changeLanguage(lang)
    }

    return (<div>
        <button onClick={() => switchLang('es')}>ES</button>
        <button onClick={() => switchLang('en')}>EN</button>
    </div>);
}

export default LanguageSwitch;