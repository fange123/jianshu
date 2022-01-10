import {
  CHANGE_INPUT_VALUE,
  ADD_INPUT_VALUE,
  DELETE_TODO,
  GET_TODO_LIST,
} from "./actionTypes";
import axios from "axios";

export const addTodo = () => ({ type: ADD_INPUT_VALUE });

export const changeValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  payload: { inputValue: value },
});

export const deleteTodo = (index) => ({
  type: DELETE_TODO,
  payload: { index },
});

export const initTodoList = (list) => ({
  type: GET_TODO_LIST,
  payload: { list },
});

export const getTodoList = () => {
  //TODO:以函数的形式传给dispatch，该函数会有dispatch参数
  return (dispatch) => {
    axios({
      method: "get",
      url: "http://localhost:3000/newTodo",
    }).then((res) => dispatch(initTodoList(res.data)));
  };
};
