import React, { Component } from "react";
class Item extends Component {
  constructor(props) {
    super(props);
    //! 在类组件中，子组件如果想要调用父组件的方法，必须要把this指像父级
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { handleDelete, id } = this.props;
    //! handleDelete是子组件的方法，里面调用父组件的方法

    handleDelete(id);
  }

  //* 该生命周期函数里面可以避免子组件做无谓的渲染
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.name !== nextProps.name) {
      return true;
    }
    return false;
  }

  render() {
    console.log("render child");
    const { name } = this.props;
    return <div onClick={this.handleClick}>{name}</div>;
  }
}
export default Item;
