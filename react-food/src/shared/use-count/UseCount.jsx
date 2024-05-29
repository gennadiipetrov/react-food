import { useCallback } from "react";
import { useState } from "react";

export const useCount = ({ initialValue = 0, min = 0, max = 5, step = 1 } = {}) => {
    const [count, setCount] = useState(initialValue);

    const increment = useCallback(() => setCount(val => val === max ? val : val + step), [max, step]);
    const decrement = useCallback(() => setCount(val => val === min ? val : val - step), [min, step]);
    const reset = useCallback(() => setCount(initialValue), [initialValue]);

    return { 
      count,
      reset, 
      increment, 
      decrement,
      MAX: max 
    };
};