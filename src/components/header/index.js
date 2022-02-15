import React, { Component } from "react";
import styled from "styled-components";
import logoPng from "../../static/images/logo.png";
import "../../static/fonts/iconfont.css";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleBlur() {
    this.setState({ focused: false });
  }

  handleFocus() {
    this.setState({ focused: true });
  }

  render() {
    const { focused } = this.state;
    return (
      <HeaderWrapper>
        <Logo href='/' />
        <Nav>
          <NavItem className='active'>首页</NavItem>
          <NavItem>下载App</NavItem>
          <NavItem>会员</NavItem>
          <NavItem>IT技术</NavItem>
          <SearchWrapper className={focused ? "focused" : ""}>
            <NavSearch onBlur={this.handleBlur} onFocus={this.handleFocus} />
            <i className={focused ? "focused iconfont" : "iconfont"}>
              &#xe6e4;
            </i>
          </SearchWrapper>
        </Nav>
        <RightWrapper>
          <RightItem>
            <i className='iconfont'>&#xe636;</i>
          </RightItem>
          <RightItem>登录</RightItem>
          <Button className='sign'>注册</Button>
          <Button className='write'>写文章</Button>
        </RightWrapper>
      </HeaderWrapper>
    );
  }
}

const SearchWrapper = styled.div`
  position: relative;
  &.focused {
    input {
      width: 260px;
      transition: width 0.5s;
    }
    .iconfont {
      background-color: #777;
      opacity: 0.7;
      transition: background-color 1s;
    }
  }
  .iconfont {
    position: absolute;
    right: 4px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    padding: 2px;
    bottom: 12px;
  }
`;

const HeaderWrapper = styled.div`
  font-size: 18px;
  height: 56px;
  position: relative;
  border-bottom: 1px solid #f0f0f0;
`;

const Logo = styled.a`
  background-image: url(${logoPng});
  display: block;
  height: 56px;
  width: 100px;
  background-size: contain;
  position: absolute;
`;

const Nav = styled.div`
  height: 58px;
  width: 960px;
  margin: 0 auto;
  display: flex;
`;

const NavItem = styled.div`
  cursor: pointer;
  text-align: center;
  height: 56px;
  width: 89px;
  margin-right: 10px;
  color: #333;
  line-height: 56px;
  &.active {
    color: #ea6f5a;
  }
`;

const NavSearch = styled.input.attrs({
  placeholder: "搜索",
})`
  transition: width 0.5s;
  width: 180px;
  height: 56px;
  padding: 0 40px 0 20px;
  height: 38px;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
  outline: none;
  margin-top: 9px;
  color: #777;
  &::placeholder {
    color: #999;
  }
`;

const RightWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
`;

const RightItem = styled.a`
  display: inline-block;
  padding: 17px 10px;
  font-size: 18px;
  color: #666;
  margin-right: 15px;
`;

const Button = styled.button`
  line-height: 24px;
  border: 1px solid rgba(236, 97, 73, 0.7);
  border-radius: 20px;
  font-size: 15px;

  background-color: transparent;

  &.sign {
    color: #ea6f5a;
    width: 80px;
    height: 38px;
    margin-right: 20px;
  }
  &.write {
    height: 40px;
    width: 100px;
    margin-right: 10px;
    color: #fff;
    background-color: #ea6f5a;
  }
`;
