import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getDishesByRestaurantId } from './thunk/get-dishes-by-restaurant-id';

const entityAdapter = createEntityAdapter();

export const DishSlice = createSlice({
    name: 'Dish',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) =>
        builder.addCase(
            getDishesByRestaurantId.fulfilled,
            (state, { payload }) => {
                // без этой штуки добавляется в стор бесконечно
                entityAdapter.removeAll(state);
                entityAdapter.setMany(state, payload);
            }
        )
});