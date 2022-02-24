import { fromJS } from "immutable";

const defaultState = fromJS({
  writeList: [],
  detail: {},
  content: "",
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "change_detail":
      return state.merge({
        detail: fromJS(action.payload.detail),
        writeList: fromJS(action.payload.writeList),
        content: action.payload.content,
      });
    default:
      break;
  }
  return state;
};

export default reducer;
