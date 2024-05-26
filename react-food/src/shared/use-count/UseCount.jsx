import { useCallback } from "react";
import { useState } from "react";

export const useCount = ({ initialValue = 0, min = 0, max = 5, step = 1 } = {}) => {
    const [count, setCount] = useState(initialValue);

    return { 
      count,
      reset: useCallback(() => setCount(initialValue), [initialValue]), 
      increment: useCallback(() => setCount(val => val === max ? val : val + step), [max, step]), 
      decrement: useCallback(() => setCount(val => val === min ? val : val - step), [min, step]),
      MAX: max 
    };
};