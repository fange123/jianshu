import React, { Component } from "react";
import List from "./components/List";
import Search from "./components/Search";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [
        {
          name: "学习",
          id: 1,
        },
        {
          name: "玩耍",
          id: 2,
        },
        {
          name: "打游戏",
          id: 3,
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleDelete(id) {
    //! state中的数据不能直接修改，必须通过setState

    //BUG:该方法里面拿不到this.state.list，因为this没有指定
    let newList = [...this.state.list];
    this.setState({ list: newList.filter((item) => item.id !== id) });
  }

  handleSubmit() {
    this.setState({
      list: [
        {
          name: this.state.inputValue,
          id: new Date(),
        },
        ...this.state.list,
      ],
    });
    this.setState({ inputValue: "" });
  }

  render() {
    return (
      <>
        <Search
          inputValue={this.state.inputValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <List list={this.state.list} handleDelete={this.handleDelete} />
      </>
    );
  }
}
export default Todo;
