import styled from "styled-components";
import { Link, Navigate } from "react-router-dom";
import { Logo } from "../../components/header/index";
import { connect } from "react-redux";
import { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const { login, handleLogin } = props;

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  return !login ? (
    <LoginWrapper>
      <Link to='/'>
        <Logo />
      </Link>
      <LoginCard>
        <h3 className='title'>登录</h3>
        <Input placeholder='请输入用户名' value={name} onChange={changeName} />
        <Input
          placeholder='请输入密码'
          type='password'
          value={password}
          onChange={changePassword}
        />
        <LoginBitton onClick={() => handleLogin(name, password)}>
          登录
        </LoginBitton>
      </LoginCard>
    </LoginWrapper>
  ) : (
    <Navigate to='/' />
  );
};

const mapStateToProps = (state) => {
  return {
    login: state.getIn(["login", "login"]),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin() {
      axios.get("/api/login.json").then((res) => {
        const data = res.data.data;
        dispatch({
          type: "login",
          payload: {
            value: data,
          },
        });
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

const LoginWrapper = styled.div`
  background-color: #f1f1f1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const LoginCard = styled.div`
  width: 400px;
  margin: 100px auto 0;
  padding: 20px 50px 50px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgb(0 0 0 / 10%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  .title {
    width: 56px;
    margin: 0 auto 20px;
    font-weight: 700;
    line-height: 56px;
    text-align: center;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
  }
`;

const Input = styled.input`
  border-bottom: none;
  border-radius: 4px 4px 0 0;
  height: 40px;
  margin-bottom: 20px;
  outline: none;
  padding: 4px 12px 4px 10px;
  border: 1px solid #c8c8c8;
  background-color: hsla(0, 0%, 71%, 0.1);
  vertical-align: middle;
`;

const LoginBitton = styled.div`
  margin-top: 10px;
  background: #3194d0;
  padding: 9px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  text-align: center;
`;
