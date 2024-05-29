import { useCount } from "@shared/use-count/UseCount";
import { useEffect } from "react";

const DishCounter = ({price}) => {
    const { count, reset, increment, decrement, MAX } = useCount();

    useEffect(() => reset(), [reset]);

    return (
        <span>
            <button onClick={increment} disabled={count>=MAX}>&nbsp;+&nbsp;</button>
                {count} 
            <button onClick={decrement} disabled={count===0}>&nbsp;-&nbsp;</button>
                &nbsp; count: {count} \ total cost: {count*price}
        </span>
    );
}

export default DishCounter;