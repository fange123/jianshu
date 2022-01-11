import React, { useEffect } from "react";
import "./App.css";
import { connect, useDispatch } from "react-redux";
import { getList, addTodo, deleteTodo } from "./store/actions";

const TodoList = (props) => {
  const { inputValue, list, handleChange } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleAdd = () => {
    dispatch(addTodo(inputValue));
  };

  return (
    <div style={{ padding: 20 }}>
      <div>
        <input value={inputValue} onChange={handleChange}></input>
        <button onClick={handleAdd}>添加</button>
      </div>
      <ul>
        {list.map((item) => (
          <li key={item.id} onClick={() => handleDelete(item.id)}>
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

//TODO:从store取值的
const mapStateToProps = (state) => {
  return { inputValue: state.inputValue, list: state.list };
};

//TODO:向store发送dispatch的
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange(e) {
      dispatch({
        type: "change_input_value",
        payload: { value: e.target.value },
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
