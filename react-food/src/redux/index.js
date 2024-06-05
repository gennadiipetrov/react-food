import { configureStore, combineSlices } from "@reduxjs/toolkit";

import { DishSlice } from "./entities/Dish";
import { RestaurantSlice } from "./entities/Restaurant";
import { ReviewSlice } from "./entities/Review";
import { UserSlice } from "./entities/User";

export const store = configureStore(
    {
        reducer: combineSlices(
            DishSlice, 
            RestaurantSlice, 
            ReviewSlice, 
            UserSlice
        )
    }
);

console.log(store.getState());