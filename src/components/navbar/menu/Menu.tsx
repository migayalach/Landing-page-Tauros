"use client";
// COMPONENTS
import { ModalLogin } from "@/components/modal";
import { ButtonSignOut } from "@/components/button";
// HOOKS
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// REDUX
// INTERFACE
// LIBRARY
import { Layout, Menu } from "antd";
// CSS
import "./menu.css";
// JAVASCRIP

const { Header } = Layout;

function NavBar() {
  const path = usePathname();
  let items =
    path === "/contacts"
      ? [
          { key: "1", label: <Link href="/">Home</Link> },
          {
            key: "2",
            label: <Link href="/contacts">Mis contactos</Link>,
          },
          { key: "3", label: <ButtonSignOut /> },
        ]
      : [
          { key: "1", label: <a href="#products">Productos</a> },
          { key: "2", label: <a href="#us">Quienes somos</a> },
          { key: "3", label: <a href="#foorter">Contactanos</a> },
          { key: "5", label: <ModalLogin /> },
        ];

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
          defaultSelectedKeys={[path === "/contacts" ? "2" : ""]}
          items={items}
          className="menu-info"
        />
      </Header>
    </Layout>
  );
}

export default NavBar;
