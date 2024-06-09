import { createSlice } from "@reduxjs/toolkit"
import { normalizedReviews } from "../../mock/normalized-mock";

export const ReviewSlice = createSlice({
    name: 'Review',
    initialState: {
        entities: normalizedReviews.reduce((acc, value) => {
            acc[value.id] = value;
            return acc;
        }, {}),
        ids: normalizedReviews.map(({id}) => id),
    }
})