import "../../../assets/css/main.css";
import "./style.css";

import {useState, useCallback} from 'react';

const Toggler = ({ onToggle }) => {
    const [toggleValue, setToggleValue] = useState();

    const toggle = useCallback(() => {
        setToggleValue(val => !val);
        onToggle(toggleValue);
    }, [toggleValue]);

    return (
        <label className="toggler">
            <input type="checkbox" className="toggler__input" onClick={toggle}/>
            <span className="toggler__state">
                <span className="toggler__control">
                    <svg className="toggler__icon" width="24" height="24" viewBox="0 0 24 24" fill=""
                        xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="12" fill="" />
                    </svg>
                </span>
                <span className="toggler__label">
                    Тема
                </span>
            </span>
        </label>
    );
};

export default Toggler;