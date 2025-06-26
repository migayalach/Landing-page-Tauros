"use client";
// COMPONENTS
import { FormLogin } from "@/components/form";
// HOOKS
import React, { useState } from "react";
// REDUX
// INTERFACE
// LIBRARY
import { Button, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
// CSS
// JAVASCRIP

function ModalLogin() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        type="text"
        onClick={showModal}
        style={{ background: "none", boxShadow: "none" }}
        className="hover:bg-transparent active:bg-transparent focus:bg-transparent"
      >
        <UserOutlined className="text-[#fff]" />
      </Button>
      <Modal
        title="Iniciar sesion"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <FormLogin />
      </Modal>
    </>
  );
}

export default ModalLogin;
