const defaultState = {
  inputValue: "hh",
  list: ["hello"],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "change_input_value":
      return {
        ...state,
        inputValue: action.payload.value,
      };

    default:
      break;
  }
  return state;
};

export default reducer;
