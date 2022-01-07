import {
  CHANGE_INPUT_VALUE,
  ADD_INPUT_VALUE,
  DELETE_TODO,
} from "./actionTypes";

export const addTodo = () => ({ type: ADD_INPUT_VALUE });

export const changeValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  payload: { inputValue: value },
});

export const deleteTodo = (index) => ({
  type: DELETE_TODO,
  payload: { index },
});
