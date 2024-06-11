import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRestaurants = createAsyncThunk(
  "restaurant/getRestaurants",
  async () => {
    const response = await fetch(
      `http://localhost:3001/api/restaurants`
    );

    return response.json();
  },
  // {
  //   condition: (headphoneId, { getState }) => {
  //     const state = getState();
  //     const loadedCodecIds = selectCodecIds(state);
  //     const headphoneCodecIds = selectHeadphoneCodecIds(state, headphoneId);
// 
  //     return headphoneCodecIds.some((id) => !loadedCodecIds.includes(id));
  //   },
  // }
);