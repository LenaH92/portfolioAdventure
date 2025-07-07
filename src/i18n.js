// i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// get dialogs files 
import es from './locale/es.json'
import en from './locale/en.json'


i18n.use(initReactI18next).init({
    //setting the dialogs options to a language for selecting it
    resources: {
        es: {
            translation: es,
        },
        en: {
            translation: en,
        },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
})

export default i18n
