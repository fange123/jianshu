import React, { Component } from "react";
class Search extends Component {
  render() {
    return (
      <div>
        <label htmlFor='input'>请输入内容</label>
        <input
          id='input'
          type='text'
          value={this.props.inputValue}
          onChange={this.props.handleChange}
        />
        <button onClick={this.props.handleSubmit}>提交</button>
      </div>
    );
  }
}
export default Search;
