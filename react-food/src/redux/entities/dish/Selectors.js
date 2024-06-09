export const selectDishModule = (state) => state.Dish;

export const selectDishById = (state, id) =>
  selectDishModule(state).entities[id];

export const selectDishIds = (state) => selectDishModule(state).ids;