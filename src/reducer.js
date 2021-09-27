import {data} from './data'

export const initialState = {
  countries: data,
  selectedCategory: "All",
  search: "",
  displayCategory: [],
  openModal: false,
  showScrollButton: false,
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

    case "SET_DISPLAY_CATEGORY":
      return {
        ...state,
        displayCategory: action.payload,
      };

    case "SET_OPEN_MODAL":
      return {
        ...state,
        openModal: action.payload,
      };

    case "SET_SHOW_SCROLL_BUTTON":
      return {
        ...state,
        showScrollButton: action.payload,
      };

    default:
      return state;
  }
};
