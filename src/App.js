import React, { Component } from "react";
import "./App.css";
import store from "./store";

import { changeValue, addTodo, deleteTodo } from "./store/actionCreator";
import TodoListUI from "./TodoListUI.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleInputChange(e) {
    store.dispatch(changeValue(e.target.value));
  }

  handleAdd() {
    store.dispatch(addTodo());
  }
  handleDelete(index) {
    store.dispatch(deleteTodo(index));
  }

  handleStoreChange() {
    //? 当数据发生变化时,setState()
    this.setState(store.getState());
  }

  componentDidMount() {
    //* 数据变化时，执行handleStoreChange函数
    //TODO:setState要在mounted中后使用，在constructor中使用可以会引发bug
    store.subscribe(this.handleStoreChange);
  }
  render() {
    const { inputValue, list } = this.state;
    return (
      <TodoListUI
        inputValue={inputValue}
        list={list}
        handleDelete={this.handleDelete}
        handleInputChange={this.handleInputChange}
        handleAdd={this.handleAdd}
      />
    );
  }
}
export default App;
