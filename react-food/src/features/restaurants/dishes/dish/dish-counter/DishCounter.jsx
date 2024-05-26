import { useState } from "react";

const DishCounter = () => {
    const [count, setCount] = useState(0);

    const increment = () => (count < 5) ? setCount(count + 1) : null;
    const decrement = () => (count > 0) ? setCount(count - 1) : null;

    return (
        <span>
            <button onClick={increment}>&nbsp;+&nbsp;</button>
            {count}
            <button onClick={decrement}>&nbsp;-&nbsp;</button>
        </span>
    );
}

export default DishCounter;