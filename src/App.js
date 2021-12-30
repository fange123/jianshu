import React from "react";
class App extends React.Component {
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
  }

  handleChange(e) {
    //~react中可以使用ref获取dom元素,but尽量不要这样，操作dom
    //~setState相当于异步操作，所以不能直接在后面取值，但是setState提供第二个参数：回调函数，在他里面可以
    this.setState(
      () => ({ inputValue: this.input.value }),
      () => {
        console.log(this.ul.querySelectorAll("li").length);
      }
    );
    // this.setState(() => ({ inputValue: e.target.value }));
  }

  handleDelete(id) {
    //! state中的数据不能直接修改，必须通过setState
    this.setState((prevState) => ({
      list: prevState.list.filter((item) => item.id !== id),
    }));
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
        <div>
          <label htmlFor='input'>请输入内容</label>
          <input
            id='input'
            type='text'
            value={this.state.inputValue}
            onChange={this.handleChange}
            ref={(input) => (this.input = input)}
          />
          <button onClick={this.handleSubmit}>提交</button>
        </div>
        <ul ref={(ul) => (this.ul = ul)}>{this.getTodoItem()}</ul>
      </>
    );
  }

  getTodoItem() {
    return this.state.list.map((item) => (
      <li
        key={item.id}
        onClick={this.handleDelete.bind(this, item.id)}
        // !dangerouslySetInnerHTML让某些标签的内容不被转译
        dangerouslySetInnerHTML={{ __html: item.name }}
      >
        {/* !: 如果使用了dangerouslySetInnerHTML，那么该标签内部不能再写内容，否则会报错*/}
        {/* {item.name} */}
      </li>
    ));
  }
}

export default App;
