import React from "react";
import styled from "styled-components";
import Left from "../components/login/Left";
import Right from './../components/login/Right';

const LoginContainer = styled.div`
width: 100%;  
min-height: 100vh;
display: -webkit-box;
display: -webkit-flex;
display: -moz-box;
display: -ms-flexbox;
display: flex;
flex-wrap: wrap;
justify-content: center;
padding: 15px;
background: #9053c7;
`;
const LoginWrapper = styled.div`
    width:1000px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 150px 130px 33px 95px;
`;

const Login = () => {
  return (
    <LoginContainer>
      <LoginWrapper>
          <Left />
          <Right />
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;
