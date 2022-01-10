import {
  CHANGE_INPUT_VALUE,
  ADD_INPUT_VALUE,
  DELETE_TODO,
  GET_TODO_LIST,
} from "./actionTypes";

const defaultState = {
  inputValue: "",
  list: [],
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return { ...state, inputValue: action.payload.inputValue };
    case ADD_INPUT_VALUE:
      return {
        ...state,
        list: [state.inputValue, ...state.list],
        inputValue: "",
      };
    case DELETE_TODO:
      const newList = [...state.list];
      newList.splice(action.payload.index, 1);
      return { ...state, list: [...newList] };

    case GET_TODO_LIST:
      return { ...state, list: action.payload.list };

    default:
      return state;
  }
};

export default reducer;
