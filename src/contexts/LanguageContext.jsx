import { createContext, useContext } from 'react'
import { useTranslation } from 'react-i18next'

// Creamos el contexto
const LanguageContext = createContext()

// Este es el proveedor que usarás en App.jsx
export function LanguageProvider({ children }) {
    const { i18n } = useTranslation()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    return (
        <LanguageContext.Provider value={{ language: i18n.language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

// Hook para usarlo fácilmente
export const useLanguage = () => useContext(LanguageContext)
