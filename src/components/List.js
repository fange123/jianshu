import React, { Component } from "react";
import Item from "./Item";
class List extends Component {
  render() {
    const { list, handleDelete } = this.props;
    return (
      <ul>
        {list?.map((item) => (
          <Item
            name={item.name}
            key={item.id}
            id={item.id}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    );
  }
}
export default List;
