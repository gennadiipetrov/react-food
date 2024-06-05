import "../../../assets/css/main.css";
import styles from "./style.module.css";

import {useState, useCallback} from 'react';

const Toggler = ({ onToggle }) => {
    const [toggleValue, setToggleValue] = useState(true);

    const toggle = useCallback(() => {
        setToggleValue(val => !val);
        onToggle(toggleValue);
    }, [toggleValue, onToggle]);

    return (
        <label className={styles.toggler}>
            <input type="checkbox" className={styles.toggler__input} value={toggleValue} onClick={toggle}/>
            <span className={styles.toggler__state}>
                <span className={styles.toggler__control}>
                    <svg className={styles.toggler__icon} width="24" height="24" viewBox="0 0 24 24" fill=""
                        xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="12" fill="" />
                    </svg>
                </span>
                <span className={styles.toggler__label}>
                    Тема
                </span>
            </span>
        </label>
    );
};

export default Toggler;