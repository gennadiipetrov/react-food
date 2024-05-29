import { useReducer } from "react";
import { Rating } from "./rating/Rating";

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

            <div>
                <label htmlFor="fio">ФИО:</label>
                <input 
                    type="text" 
                    name="fio" 
                    value={form.fio} 
                    onChange={({target}) => dispatch({ type: "setFio", value: target.value })}
                />
            </div>

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

            <Rating onClick = {value => dispatch({ type: "setRating", value})}/>

            <button onClick = {() => {

                // backend request
                console.log(form);
                
                dispatch({ type: "init" });
            }}>Сохранить</button>
        </div>
    );
}

export default ReviewForm;