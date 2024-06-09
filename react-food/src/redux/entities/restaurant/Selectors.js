export const selectRestaurantModule = (state) => state.Restaurant;

export const selectRestaurantById = (state, id) =>
    selectRestaurantModule(state).entities[id];

export const selecRestaurantIds = (state) => selectRestaurantModule(state).ids;