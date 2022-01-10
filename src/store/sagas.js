import { put, takeEvery, call } from "redux-saga/effects";
import { GET_TODO_LIST } from "./actionTypes";
import axios from "axios";
import { initList } from "./actionCreator";

function* fetchUser() {
  try {
    //new: call相当于发请求
    const res = yield call(axios.get, "http://localhost:3000/newTodo");
    //new: put相当于向store发送数据
    yield put(initList(res.data));
  } catch (e) {
    console.log(e);
  }
}
function* mySaga() {
  yield takeEvery(GET_TODO_LIST, fetchUser);
}

export default mySaga;
