// Actions
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// Set the initial state to be an empty array of categories
const initialState = {
  categories: [],
};

// Export Action Creator
export const checkStatus = () => ({
  type: CHECK_STATUS,
});

// Write the reducer and export it as default
export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return {
        status: 'Under construction',
      };
    default:
      return state;
  }
}
