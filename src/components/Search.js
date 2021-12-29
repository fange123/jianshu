import React, { Component } from "react";
import PropTypes from "prop-types";
class Search extends Component {
  render() {
    const { inputValue, handleChange, handleSubmit } = this.props;
    return (
      <div>
        <label htmlFor='input'>请输入内容</label>
        <input
          id='input'
          type='text'
          value={inputValue}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>提交</button>
      </div>
    );
  }
}

Search.propTypes = {
  inputValue: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
export default Search;
