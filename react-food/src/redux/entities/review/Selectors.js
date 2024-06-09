export const selectReviewModule = (state) => state.Review;

export const selectReviewById = (state, id) =>
  selectReviewModule(state).entities[id];

export const selectReviewIds = (state) => selectReviewModule(state).ids;