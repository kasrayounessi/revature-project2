import { createStore } from "redux";

const initialState = {
  booksAdded: [],
};

const bookAddedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      console.log({
        ...state,
        booksAdded: [...state.booksAdded, action.payload.content],
      });
      
      return {
        ...state,
        booksAdded: [...state.booksAdded, action.payload.content],
      };
    case "remove":
      return {
        ...state,
        booksAdded: state.booksAdded.filter((x) => x != action.payload.content),
      };
    default:
      return state;
  }
};

const store = createStore(bookAddedReducer);

export default store;
