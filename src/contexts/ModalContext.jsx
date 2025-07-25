import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
    const [modal, setModal] = useState({ type: null, data: null });

    const openModal = (type, data = null) => {
        setModal({ type, data });
    };

    const closeModal = () => {
        setModal({ type: null, data: null });
    };

    return (
        <ModalContext.Provider value={{ modal, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
}

export const useModal = () => useContext(ModalContext);