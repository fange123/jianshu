const defaultState = {
  inputValue: "",
  list: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "change_input_value":
      return {
        ...state,
        inputValue: action.payload.value,
      };

    case "addTodo":
      return {
        ...state,
        inputValue: "",
      };

    case "init_list":
      return {
        ...state,
        list: action.payload.list,
      };

    default:
      break;
  }
  return state;
};

export default reducer;
