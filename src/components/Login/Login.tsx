import React from "react";
import styled from "styled-components";
import { Form, Input, Button } from "antd";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 24px;
`;

const StyledForm = styled(Form)`
  width: 400px;
`;

const StyledInput = styled(Input)`
  /* font-size: 24px;
  margin-bottom: 24px; */
`;

const LoginPage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Wrapper>
      <Title>Đăng nhập</Title>
      <StyledForm onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập!" }]}
        >
          <StyledInput placeholder="Tên đăng nhập" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <StyledInput.Password placeholder="Mật khẩu" />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Đăng nhập
        </Button>
      </StyledForm>
    </Wrapper>
  );
};

export default LoginPage;
