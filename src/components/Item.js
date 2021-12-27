import React, { Component } from "react";
class Item extends Component {
  handleDelete() {
    //! handleDelete是子组件的方法，里面调用父组件的方法
    this.props.handleDelete(this.props.id);
  }

  render() {
    return <div onClick={this.handleDelete.bind(this)}>{this.props.name}</div>;
  }
}
export default Item;
