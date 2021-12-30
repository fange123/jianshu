import React, { Component } from "react";

// *生命周期函数是组件在某一时刻自动执行的函数
class LifeCircle extends Component {
  state = {
    inputValue: "333",
  };
  handleChange(e) {
    this.setState(() => ({ inputValue: e.target.value }));
  }
  // *组件即将被挂载在页面前调用
  componentWillMount() {
    console.log("componentWillMount");
  }
  //* 组件被更新之前执行,来决定组件是否被更新
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    //TODO:可以防止子组件在父组件render的时候产生不必要的render
    return true;
  }
  //* 在shouldComponentUpdate函数后面执行，如果shouldComponentUpdate函数返回true就执行
  //* 否则就不执行
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  render() {
    console.log("render");
    return (
      <div>
        <input
          value={this.state.inputValue}
          onChange={this.handleChange.bind(this)}
        ></input>
        <button>点击</button>
      </div>
    );
  }

  //* 组件更新完成之后执行
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  //* 组件被挂载之后调用
  componentDidMount() {
    console.log("componentDidMount");
  }

  //* 组件从页面去除的时候执行
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}
export default LifeCircle;

// ?初始化 阶段
// ?挂载 阶段  ---- componentWillMount  render  componentDidMount
// ?更新 阶段
// ?卸载 阶段
