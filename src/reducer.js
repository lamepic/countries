export const initialState = {
  countries: [],
  selectedCategory: "",
  search: ""
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SELECTED_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload,
      };

    case "SEARCH":
      return {
        ...state,
        search: action.payload,
      };

    case "SET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
      };
    default:
      return state;
  }
};
