import { fromJS } from "immutable";

const defaultState = fromJS({
  login: false,
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "login":
      return state.merge({
        login: action.payload.value,
      });
    case "logout":
      return state.merge({
        login: false,
      });
    default:
      return state;
  }
};
export default reducer;
