"use client";
// COMPONENTS
// HOOKS
import React from "react";
// REDUX
// INTERFACE
// LIBRARY
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
// CSS
// JAVASCRIP

function FormLogin() {
  type FieldType = {
    email?: string;
    password?: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "El email es obligatorio",
            },
            {
              type: "email",
              message: "El email no es válido",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Por favor introduzca su contraseña!" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <div className="sm:flex sm:justify-around mt-12">
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Iniciar sesion
            </Button>
          </Form.Item>

          <Button
            type="primary"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-[8px] px-4 py-2 shadow-md flex items-center gap-2"
          >
            <GoogleOutlined />
            Iniciar con Google
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default FormLogin;
