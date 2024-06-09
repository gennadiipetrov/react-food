import { createSlice } from "@reduxjs/toolkit"
import { normalizedUsers } from "../../mock/normalized-mock";

export const UserSlice = createSlice({
    name: 'User',
    initialState: {
        entities: normalizedUsers.reduce((acc, value) => {
            acc[value.id] = value;
            return acc;
        }, {}),
        ids: normalizedUsers.map(({id}) => id),
    }
})