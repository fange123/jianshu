import { fromJS } from "immutable";

//~ 用FromJS包裹对象  取值时需要.get('属性名')
const defaultState = fromJS({
  focused: false,
});

// * state是不可改变的，但是有时候却会不小心修改它，为了避免state被修改
// * 可以使用immutable(不可更改)库
// * 把state对象改成immutable对象

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "search_focus":
      //~ 返回值时需要用set,set并不是修改state,而是结合新旧结果生成一个全新的immutable对象
      return state.set("focused", true);
    case "search_blur":
      return state.set("focused", false);

    default:
      break;
  }
  return state;
};

export default reducer;
