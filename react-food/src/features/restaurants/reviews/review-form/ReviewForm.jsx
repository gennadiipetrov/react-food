import { useReducer } from "react";
import { Rating } from "./rating/Rating";
import Button from "@widgets/button/Button";
import TextInput from "@widgets/inputs/text-input/TextInput";

const initValue = { fio: '', message: '', rating: 0 };

function reducer(state, { type, value } = {}) {
  switch (type) {
    case "setFio":
      return {...state, fio: value};
    case "setMessage":
      return {...state, message: value};
    case "setRating":
      return {...state, rating: value};
    case "init":
      return {...initValue};
    default:
      return state;
  }
}

const ReviewForm = () => {
    const [form, dispatch] = useReducer(reducer, initValue);

    return (
        <div>
            <p>
                <strong>Форма отзыва</strong>
            </p>

            <TextInput
              onChange={({target}) => dispatch({ type: "setFio", value: target.value })}
              caption={"ФИО:"}
              placeholder={"введите фио:"}
              value={form.fio}
            />

            <div>
                <label htmlFor="message">Сообщение:</label>
                <textarea 
                    type="text" 
                    name="message"
                    rows="10" 
                    cols="45"
                    value={form.message}
                    onChange={({target}) => dispatch({ type: "setMessage", value: target.value })}
                />
            </div>

            <Rating 
              defaultValue={1}
              onClick = {value => dispatch({ type: "setRating", value})}
              MAX={5}
            />

            <Button onClick = {() => {

                // backend request
                console.log(form);
                
                dispatch({ type: "init" });
            }}>Сохранить</Button>
        </div>
    );
}

export default ReviewForm;