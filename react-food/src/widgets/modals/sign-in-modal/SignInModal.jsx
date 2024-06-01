
import "../../../../assets/css/main.css";
import "./style.css";

import TextInput from '@widgets/inputs/text-input/TextInput';
import Button from '@widgets/button/Button';

import { createPortal } from "react-dom";
import {useState} from 'react';

const SignInModal = ({onClose, onEnter}) => {

    const [userName, setUserName] = useState('');

    return (
        <>
            {createPortal(
                <div id="backboard" className="modal">
                <article id="modal" className="modal__window">
                    <header className="modal__title">
                        Вход
                    </header>

                    <div id="modal-close" className="modal__close-button" onClick={onClose}>

                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M12.4714 3.52861C12.7318 3.78896 12.7318 4.21107 12.4714 4.47141L4.47141 12.4714C4.21107 12.7318 3.78896 12.7318 3.52861 12.4714C3.26826 12.2111 3.26826 11.789 3.52861 11.5286L11.5286 3.52861C11.789 3.26826 12.2111 3.26826 12.4714 3.52861Z"
                                fill="#495057" />
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M3.52861 3.52861C3.78896 3.26826 4.21107 3.26826 4.47141 3.52861L12.4714 11.5286C12.7318 11.789 12.7318 12.2111 12.4714 12.4714C12.2111 12.7318 11.789 12.7318 11.5286 12.4714L3.52861 4.47141C3.26826 4.21107 3.26826 3.78896 3.52861 3.52861Z"
                                fill="#495057" />
                        </svg>

                    </div>

                    <main className="modal__content">
                        Введите имя пользователя чтобы войти в систему
                        
                        <TextInput caption={'Имя'} onChange={event => setUserName(event.target.value)} placeholder="введи имя..."/>

                        <Button onClick={() => { onEnter(userName); onClose(); }}> Войти </Button> 
                    </main>
                </article>
                </div>
            , document.getElementById("modal")
            )}
        </>
    );
};

export default SignInModal;