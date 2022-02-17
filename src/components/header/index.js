import React from "react";
import styled from "styled-components";
import logoPng from "../../static/images/logo.png";
import "../../static/fonts/iconfont.css";
import { connect } from "react-redux";
import { textSplit } from "../../utils";
import axios from "axios";
import { fromJS } from "immutable";

const Header = (props) => {
  const { focused, list, handleBlur, handleFocus } = props;
  const searchArea = (focused) => {
    if (focused) {
      return (
        <SearchArea>
          <SearchUl>
            {list.map((item) => (
              <LiItem key={item.id}>
                <SearchItem>{textSplit(item.value)}</SearchItem>
              </LiItem>
            ))}
          </SearchUl>
        </SearchArea>
      );
    }
    return null;
  };

  const LiItem = ({ children }) => {
    return (
      <SearchLi>
        <i className='iconfont'>&#xe787;</i>
        {children}
        <i className='iconfont del'>&#xe61a;</i>
      </SearchLi>
    );
  };
  return (
    <HeaderWrapper>
      <Logo href='/' />
      <Nav>
        <NavItem className='active'>首页</NavItem>
        <NavItem>下载App</NavItem>
        <NavItem>会员</NavItem>
        <NavItem>IT技术</NavItem>
        <SearchWrapper className={focused ? "focused" : ""}>
          <NavSearch onBlur={handleBlur} onFocus={handleFocus} />
          <i className={focused ? "focused iconfont" : "iconfont"}>&#xe6e4;</i>
          {searchArea(focused)}
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
};

const mapStateToProps = (state) => {
  // return { focused: state.get("header").get("focused") };
  return {
    focused: state.getIn(["header", "focused"]),
    // TODO：immutable的List没办法直接map遍历，可以用toJS()转化成正常格式
    list: state.getIn(["header", "list"]).toJS(),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleBlur() {
      dispatch({
        type: "search_blur",
      });
    },

    handleFocus() {
      dispatch({
        type: "search_focus",
      });
      //TODO：获取到焦点的时候还需要发送请求，一般异步的操作一般使用redux-thunk或者redux-saga,使得dispatch能够发送函数

      dispatch((dispatch) => {
        axios
          .get("/api/header.json")
          .then((res) => {
            //* 请求拿到值需要给store，然后从store里面拿值
            dispatch({
              type: "get_list",
              payload: { list: fromJS(res.data.data) },
            });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

export const SearchUl = styled.ul``;
export const SearchLi = styled.li`
  line-height: 20px;
  display: flex;
  align-items: center;
  .iconfont {
    position: static !important;
    font-size: 18px;
    background: none !important;
  }
  .del {
    cursor: pointer;
    font-size: 10px;
    visibility: hidden;
  }
  &:hover {
    .del {
      visibility: visible;
    }
  }
`;
export const SearchItem = styled.a`
  width: 80%;
  display: inline-block;
  line-height: 20px;
  padding: 10px 5px;
  font-size: 14px;
  color: #333;
`;

export const SearchArea = styled.div`
  margin-top: 15px;
  width: 230px;
  background-color: #fff;
  box-shadow: 0 0 8px rgb(0 0 0 / 20%);
  left: 0;
  border-radius: 4px;
  padding: 5px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 99%;
  }
`;

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
