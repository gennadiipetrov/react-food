import "../../../../assets/css/main.css";
import styles from "./style.module.css";
import classNames from "classnames";

const TextInput = ({ onChange, caption, placeholder, value }) => {
    return (
        <label className={styles.textbox}>
            <p className={styles.textbox__caption}> {caption} </p>
            <input className={classNames(styles.textbox__input, styles.textbox__input_default)}
            type="text" 
            placeholder={placeholder} 
            onChange={onChange}
            value={value}
            />
        </label>
    );
};

export default TextInput;
