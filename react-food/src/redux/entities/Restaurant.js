import { createSlice } from "@reduxjs/toolkit"
import { normalizedRestaurants } from "../../mock/normalized-mock";

export const RestaurantSlice = createSlice({
    name: 'Restaurant',
    initialState: {
        entities: normalizedRestaurants.reduce((acc, value) => {
            acc[value.id] = value;
            return acc;
        }, {}),
        ids: normalizedRestaurants.map(({id}) => id),
    }
})