import React from "react";
import { Input, Space, Button, List } from "antd";

//TODO:无状态组件，，就是一个函数，不处理任何逻辑，只返回UI组件
const TodoListUI = (props) => {
  const { inputValue, list, handleAdd, handleInputChange, handleDelete } =
    props;

  return (
    <div style={{ padding: 20 }}>
      <Space>
        <Input
          placeholder='请输入'
          style={{ width: 300 }}
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button type='primary' onClick={handleAdd}>
          点击
        </Button>
      </Space>
      <List
        style={{ width: 300, marginTop: 20 }}
        bordered
        size='small'
        dataSource={list}
        renderItem={(item, index) => (
          <List.Item onClick={() => handleDelete(index)}>{item}</List.Item>
        )}
      />
    </div>
  );
};
export default TodoListUI;
