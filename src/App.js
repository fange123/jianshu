import React, { Component } from "react";
import "./App.css";
import store from "./store";

import {
  changeValue,
  addTodo,
  deleteTodo,
  getTodoList,
} from "./store/actionCreator";
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
    // axios({
    //   method: "get",
    //   url: "http://localhost:3000/newTodo",
    //   // !:不能直接setState,请求回来的数据要存在store里面
    // }).then((res) => this.setState(() => ({ list: res.data })));

    //TODO:使用了redux-thunk后，dispatch里面的action不仅仅是对象了,还可以是个函数，函数里面可以发送ajax请求
    store.dispatch(getTodoList());
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
