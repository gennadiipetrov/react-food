import { useCount } from "@shared/use-count/UseCount";
import { useEffect } from "react";
import Button from '@widgets/button/Button'

const DishCounter = ({price}) => {
    const { count, reset, increment, decrement, MAX } = useCount();

    useEffect(() => reset(), [reset]);

    return (
        <span>
            <Button onClick={increment} disabled={count>=MAX} small={true}>&nbsp;+&nbsp;</Button>
                {count} 
            <Button onClick={decrement} disabled={count===0} small={true}>&nbsp;-&nbsp;</Button>
                &nbsp; count: {count} \ total cost: {count*price}
        </span>
    );
}

export default DishCounter;