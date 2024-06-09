import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getReviewsByRestaurantId } from './thunk/get-reviews-by-restaurant-id';

const entityAdapter = createEntityAdapter();

export const ReviewSlice = createSlice({
    name: 'Review',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) =>
        builder.addCase(
            getReviewsByRestaurantId.fulfilled,
            (state, { payload }) => {
                // без этой штуки добавляется в стор бесконечно
                entityAdapter.removeAll(state);
                entityAdapter.setMany(state, payload);
            }
        )
});