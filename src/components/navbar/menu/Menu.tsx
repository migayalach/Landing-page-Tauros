"use client";
// COMPONENTS
// HOOKS
import React from "react";
// REDUX
// INTERFACE
// LIBRARY
import { Layout, Menu } from "antd";
// CSS
import "./menu.css";
import Link from "next/link";
// JAVASCRIP

const { Header } = Layout;

const items = [
  { key: "1", label: <a href="#products">Productos</a> },
  { key: "2", label: <a href="#us">Quienes somos</a> },
  { key: "3", label: <a href="#foorter">Contactanos</a> },
];

function NavBar() {
  return (
    <Layout>
      <Header
        className="fixed-header"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="logo">
          <Link href="./">
            <img src="https://res.cloudinary.com/dqgcyonb9/image/upload/v1750174385/Taurus/alhq3q0kvwtozm2suru4.png" />
          </Link>
        </div>

        <div className="name-company">
          <h1>Taurus</h1>
        </div>

        <Menu
          theme="dark"
          mode="horizontal"
          // defaultSelectedKeys={["1"]}
          items={items}
          className="menu-info"
        />
      </Header>
    </Layout>
  );
}

export default NavBar;
