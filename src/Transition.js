import React, { Component } from "react";
import "./index.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
class Transition extends Component {
  state = {
    name: "hello",
    show: true,
    list: [],
  };

  handleToggle() {
    this.setState((prevState) => ({ show: !prevState.show }));
  }
  handleAddList() {
    this.setState((prevState) => ({ list: [...prevState.list, "item"] }));
  }

  render() {
    return (
      <div>
        <h1 className={this.state.show ? "show" : "hide"}>{this.state.name}</h1>
        <button
          onClick={() =>
            this.setState((prevState) => ({ show: !prevState.show }))
          }
        >
          切换
        </button>
        <hr />
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames='zhy'
          onEnter={(el) => (el.style.color = "blue")}
          appear={true}
        >
          <h1>{this.state.name}</h1>
        </CSSTransition>

        <button onClick={this.handleToggle.bind(this)}>切换</button>

        <hr></hr>
        {/* !:给每一个item加上动画，可以使用动画组，transitionGroup 配合CSSTransition使用*/}
        {/* !: 这个时候CSSTransition不需要in属性 */}
        <ul>
          <TransitionGroup>
            {this.state.list.map((item, index) => (
              <CSSTransition
                key={index}
                timeout={1000}
                classNames='zhy'
                onEnter={(el) => (el.style.color = "blue")}
                appear={true}
              >
                <li>{item}</li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>

        <button onClick={this.handleAddList.bind(this)}>切换</button>
      </div>
    );
  }
}
export default Transition;
