import { Input, Space, Button, List } from "antd";
import React, { Component } from "react";
import "./App.css";
import store from "./store";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    //* 数据变化时，执行handleStoreChange函数
    store.subscribe(this.handleStoreChange);
  }
  handleInputChange(e) {
    store.dispatch({
      type: "CHANGE_INPUT_VALUE",
      payload: { inputValue: e.target.value },
    });
  }

  handleAdd() {
    store.dispatch({
      type: "ADD_INPUT_VALUE",
    });
  }
  handleDelete(index) {
    store.dispatch({
      type: "DELETE_TODO",
      payload: { index },
    });
  }

  handleStoreChange() {
    //? 当数据发生变化时,setState()
    this.setState(store.getState());
  }
  render() {
    const { inputValue, list } = this.state;
    return (
      <div style={{ padding: 20 }}>
        <Space>
          <Input
            placeholder='请输入'
            style={{ width: 300 }}
            value={inputValue}
            onChange={this.handleInputChange}
          />
          <Button type='primary' onClick={this.handleAdd}>
            点击
          </Button>
        </Space>
        <List
          style={{ width: 300, marginTop: 20 }}
          bordered
          size='small'
          dataSource={list}
          renderItem={(item, index) => (
            <List.Item onClick={() => this.handleDelete(index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}
export default App;
