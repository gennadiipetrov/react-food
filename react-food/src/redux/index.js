import { configureStore, combineSlices } from "@reduxjs/toolkit";

import { DishSlice } from "./entities/dish/Dish";
import { RestaurantSlice } from "./entities/restaurant/Restaurant";
import { ReviewSlice } from "./entities/review/Review";
import { UserSlice } from "./entities/user/User";

import { apiService } from "./service/api/index";

export const store = configureStore({
    reducer: combineSlices(
        DishSlice, 
        RestaurantSlice, 
        ReviewSlice, 
        UserSlice,
        apiService
    ),
    middleware: getDefaultMiddleware =>  getDefaultMiddleware().concat(apiService.middleware),
});

console.log(store.getState());