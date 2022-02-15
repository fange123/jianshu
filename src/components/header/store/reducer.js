const defaultState = {
  focused: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "search_focus":
      return { ...state, focused: true };
    case "search_blur":
      return { ...state, focused: false };

    default:
      break;
  }
  return { focused: state.focused };
};

export default reducer;
