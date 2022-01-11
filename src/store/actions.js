import axios from "axios";

const fetchList = (dispatch) => {
  axios.get("http://localhost:3000/newTodo").then((res) => {
    dispatch({ type: "init_list", payload: { list: res.data } });
  });
};

export const getList = () => {
  //TODO: action作为函数发送请求的时候，return 一个函数，参数为dispatch
  return (dispatch) => fetchList(dispatch);
};

export const addTodo = (value) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3000/newTodo", {
        value,
      })
      .then((res) => {
        dispatch({ type: "addTodo", payload: { list: res.data } });
      })
      .then(() => fetchList(dispatch));
  };
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3000/newTodo/${id}`)
      .then((res) => {
        dispatch({ type: "addTodo", payload: { list: res.data } });
      })
      .then(() => fetchList(dispatch));
  };
};
