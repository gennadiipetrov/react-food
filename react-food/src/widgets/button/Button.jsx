import "../../../assets/css/main.css";
import "./style.css";

import {useContext} from 'react';
import {ThemeSwitcherContext} from '@shared/contexts/ThemeSwitcherContext'

/**
 * appearance
 *  - button_primary
 *  - button_secondary
 *  - button_alternate
 */
const Button = ({ children, onClick, appearance = "button_primary", disabled = false}) => {

    /**
     * TODO Пока так, по хорошему тему менять надо по-другому.
     */
    const themeValue = useContext(ThemeSwitcherContext);

    return <button 
        className={themeValue ? "button button_alternate" : "button " + appearance} 
        disabled={disabled}
        onClick={onClick}>{children}
    </button>;
};

export default Button;