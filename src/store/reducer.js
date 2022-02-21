import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "../components/header/store";
import { reducer as homeReducer } from "../pages/home/store";

// ~ header中的state是immutable,为了统一数据的取值方式，可以把最大的reducer的state也变为immutable类型的
// ~ 可以借助redux-immutable库

const reducer = combineReducers({ header: headerReducer, home: homeReducer });

export default reducer;
