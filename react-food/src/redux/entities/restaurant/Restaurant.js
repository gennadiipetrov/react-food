import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { getRestaurants } from "./thunk/get-restaurants";

const entityAdapter = createEntityAdapter();

export const RestaurantSlice = createSlice({
    name: 'Restaurant',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) =>
        builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
          entityAdapter.setAll(state, payload);
        }),
})