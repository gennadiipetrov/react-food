import "../../../assets/css/main.css";
import styles from"./style.module.css";
import classNames from 'classnames'

import {useTheme} from '../../features/theme/theme-switcher/ThemeHook.js'

/**
 * appearance
 *  - button_primary
 *  - button_secondary
 *  - button_alternate
 */
const Button = ({ children, onClick, appearance = "button_primary", disabled = false, small = false}) => {

    /**
     * TODO Пока так, по хорошему тему менять надо по-другому.
     * Нужно это убрать и сделать на css переменных нормально
     */
    const {themeValue} = useTheme();

    return <button 
        className={classNames(styles.button,
            {
                [styles.button_small]: !!small,
                [styles.button_alternate]: themeValue,
                [styles.button_primary]: !themeValue,
            }
        ) } 
        disabled={disabled}
        onClick={onClick}>
            {children}
    </button>;
};

export default Button;