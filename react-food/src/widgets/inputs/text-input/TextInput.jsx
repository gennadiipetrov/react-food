import "../../../../assets/css/main.css";
import "./style.css";

const TextInput = ({ onChange, caption, placeholder, value }) => {
    return (
        <label className="textbox">
            <p className="textbox__caption"> {caption} </p>
            <input className="textbox__input textbox__input_default"
            type="text" 
            placeholder={placeholder} 
            onChange={onChange}
            value={value}
            />
        </label>
    );
};

export default TextInput;
