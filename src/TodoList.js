import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class TodoList extends Component {
  handleChange(e) {}
  componentDidMount() {}
  render() {
    const { inputValue, list, handleChange } = this.props;
    return (
      <div style={{ padding: 20 }}>
        <div>
          <input value={inputValue} onChange={handleChange}></input>
          <button>添加</button>
        </div>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { inputValue: state.inputValue, list: state.list };
};

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
