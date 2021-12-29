import React, { Component } from "react";
import Item from "./Item";
import PropTypes from "prop-types";
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
//* 对传过来的值做类型校验，比如：我要字符串，你传过来数字就是不符合我的要求
List.propTypes = {
  list: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
// *list被要求是必传项，如果父组件就是没传，肯定会报错，那么这个时候需要给一个默认值
List.defaultProps = {
  list: [],
};
export default List;
