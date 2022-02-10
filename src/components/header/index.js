import React, { Component } from "react";
import styled from "styled-components";
import logoPng from "../../static/images/logo.png";

export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo href='/' />
        <Nav>
          <NavItem className='active'>首页</NavItem>
          <NavItem>下载App</NavItem>
          <NavItem>会员</NavItem>
          <NavItem>IT技术</NavItem>
          <NavSearch />
        </Nav>
        <RightWrapper>
          <RightItem>Aa</RightItem>
          <RightItem>登录</RightItem>
          <Button className='sign'>注册</Button>
          <Button className='write'>写文章</Button>
        </RightWrapper>
      </HeaderWrapper>
    );
  }
}

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
