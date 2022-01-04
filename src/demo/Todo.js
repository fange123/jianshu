import React, { Component } from "react";
import List from "./components/List";
import Search from "./components/Search";
import axios from "axios";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.setState(() => ({ inputValue: e.target.value }));
  }

  handleDelete(id) {
    //! state中的数据不能直接修改，必须通过setState

    //BUG:该方法里面拿不到this.state.list，因为this没有指定
    // this.setState((prevState) => ({
    //   list: prevState.list.filter((item) => item.id !== id),
    // }));

    axios({
      method: "delete",
      url: `http://localhost:3000/todo/${id}`,
    }).then(() => {
      this.getTodoList();
    });
  }

  handleSubmit() {
    //TODO:setState不推荐写对象的方式，用函数的方法更好👇
    // this.setState({
    //   list: [
    //     {
    //       name: this.state.inputValue,
    //       id: new Date(),
    //     },
    //     ...this.state.list,
    //   ],
    // });
    // this.setState({ inputValue: "" });
    //new:setState函数式写法,如果只return一个对象，可以省略return，用（）包起来
    //new:setState函数接受一个参数，表示修改数据之前的数据

    // this.setState((prevState) => {
    //   console.log(prevState); //state里面的list和inputValue
    //   return {
    //     list: [
    //       {
    //         name: this.state.inputValue,
    //         id: new Date(),
    //       },
    //       ...prevState.list,
    //     ],

    //     inputValue: "",
    //   };
    // });

    axios({
      method: "POST",
      url: "http://localhost:3000/todo",
      data: {
        name: this.state.inputValue,
      },
    }).then(() => {
      this.setState(() => ({ inputValue: "" }));
      this.getTodoList();
    });
  }

  getTodoList() {
    axios({
      method: "get",
      url: "http://localhost:3000/todo",
    }).then((res) => this.setState(() => ({ list: res.data })));
  }

  //* 当组件的state或者props发生改变的时候，render函数就会重新渲染
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

  componentDidMount() {
    this.getTodoList();
  }
}
export default Todo;
