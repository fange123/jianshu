import React, { Component } from "react";
import Item from "./Item";
class List extends Component {
  render() {
    console.log(this.props);
    return (
      <ul>
        {this.props.list?.map((item) => (
          <Item
            name={item.name}
            key={item.id}
            id={item.id}
            handleDelete={this.props.handleDelete}
          />
        ))}
      </ul>
    );
  }
}
export default List;
