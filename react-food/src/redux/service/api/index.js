import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
    reducerPath: "api",
    tagTypes: ["Review", "restaurants"],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
    endpoints: builder => ({
        getRestaurants: builder.query({
            query: () => ({
                url: 'restaurants',
            }),
        }),
        getDishesByRestaurantId: builder.query({
            query: restaurantId => ({
                url: 'dishes',
                params: { restaurantId },
            }),
        }),
        getReviewsByRestaurantId: builder.query({
            query: restaurantId => ({
                url: 'reviews',
                params: { restaurantId },
            }),
        })
    }),
});

export const {
    useGetRestaurantsQuery,
    useGetDishesByRestaurantIdQuery,
    useGetReviewsByRestaurantIdQuery,
} = apiService;