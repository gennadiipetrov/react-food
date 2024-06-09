import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../mock/normalized-mock";

export const DishSlice = createSlice({
    name: 'Dish',
    initialState: {
        entities: normalizedDishes.reduce((acc, value) => {
            acc[value.id] = value;
            return acc;
        }, {}),
        ids: normalizedDishes.map(({id}) => id),
    }
})