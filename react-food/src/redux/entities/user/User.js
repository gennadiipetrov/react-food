import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getUsers } from './thunk/get-users';

const entityAdapter = createEntityAdapter();

export const UserSlice = createSlice({
    name: 'User',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) =>
        builder.addCase(getUsers.fulfilled, (state, { payload }) => {
            entityAdapter.setAll(state, payload);
        })
});