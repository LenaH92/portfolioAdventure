import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

function ChooseLanguagePage() {

    const { changeLanguage } = useLanguage()
    const navigate = useNavigate()

    function handleSelect(lang) {
        changeLanguage(lang)
        navigate("/welcome")
    }

    return (<div>
        <button onClick={() => handleSelect('es')}>Español</button>
        <button onClick={() => handleSelect('en')}>Inglés</button>
    </div>);
}

export default ChooseLanguagePage;