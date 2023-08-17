import React from "react";
import { Layout, Menu } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

const { Header } = Layout;

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 0 50px;
  position: "fixed";
  top: 0;
`;

const Navbar: React.FC = () => {
  return (
    <StyledHeader>
      <div className="logo" />
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/">Trang chu</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/column">Sản phẩm</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/introduce">Giới thiệu</Link>
        </Menu.Item>
      </Menu>

      <div className="right-menu">
        <Menu theme="light" mode="horizontal">
          <Menu.Item key="5">
            <Link to="/login">Đăng nhập</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/register">Đăng ký</Link>
          </Menu.Item>
        </Menu>
      </div>
    </StyledHeader>
  );
};

export default Navbar;
