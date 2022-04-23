import { Lock, Person } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 290px;
`;

const LoginFormTitle = styled.span`
  font-family: Poppins-Bold;
  font-size: 24px;
  color: #333333;
  line-height: 1.2;
  text-align: center;
  width: 100%;
  display: block;
  padding-bottom: 54px;
`;

const FormGroup = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
  margin-bottom: 10px;
`;

const Input = styled.input`
  font-family: Poppins-Medium;
  font-size: 15px;
  line-height: 1.5;
  color: #666666;
  display: block;
  width: 100%;
  background: #e6e6e6;
  height: 50px;
  border-radius: 25px;
  padding: 0 30px 0 68px;
`;

const InputIcon = styled.span`
  font-size: 15px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  position: absolute;
  border-radius: 25px;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-left: 35px;
  pointer-events: none;
  color: #666666;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
`;


const Focus = styled.span`
  display: block;
  position: absolute;
  border-radius: 25px;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 0px 0px;
  color: rgba(70, 129, 184, 0.8);
`;

const LoginButton = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
`;

const Button = styled.button`
  font-family: Montserrat-Bold;
  font-size: 15px;
  line-height: 1.5;
  color: #fff;
  text-transform: uppercase;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background: #1cc0a9;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
  &:hover{
  background: #333333;
  }
`;

const Right = () => {
  return (
    <Form>
      <LoginFormTitle>Account Verification</LoginFormTitle>
      <FormGroup>
        <Input className="input" type="text" placeholder="Username" />
        <Focus className="focus" />
        <InputIcon className="inputIcon">
          <Person />
        </InputIcon>
      </FormGroup>
      <FormGroup>
        <Input className="input" type="password" placeholder="****" />
        <Focus className="focus" />
        <InputIcon className="inputIcon">
          <Lock />
        </InputIcon>
      </FormGroup>

      <LoginButton>
        <Button>Login</Button>
      </LoginButton>
    </Form>
  );
};

export default Right;
