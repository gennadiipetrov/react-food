import { configureStore, combineSlices } from "@reduxjs/toolkit";

import { DishSlice } from "./entities/dish/Dish";
import { RestaurantSlice } from "./entities/restaurant/Restaurant";
import { ReviewSlice } from "./entities/review/Review";
import { UserSlice } from "./entities/user/User";

export const store = configureStore({
    reducer: combineSlices(
        DishSlice, 
        RestaurantSlice, 
        ReviewSlice, 
        UserSlice
    ),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

console.log(store.getState());