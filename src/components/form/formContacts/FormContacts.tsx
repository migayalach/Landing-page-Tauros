"use client";
// COMPONENTS
// HOOKS
// REDUX
import React, { useState } from "react";
// LIBRARY
import { Button, Form, Input } from "antd";
// CSS
// JAVASCRIP
// INTERFACE
type FieldType = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
};

function FormContacts() {
  const [infoUser, setInfoUser] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleStateData = (event: {
    target: { name: string; value: string };
  }) => {
    setInfoUser({
      ...infoUser,
      [event.target.name]: event.target.value,
    });
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600, marginTop: "20px" }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      className="pl-4 pr-4 sm:pl-16 md:pl-12"
    >
      <Form.Item<FieldType>
        label="Nombre"
        name="name"
        rules={[
          {
            required: true,
            message: "El apellido es obligatorio",
          },
          {
            pattern: /^[a-zA-ZÀ-ÿ\s]+$/,
            message: "Solo se permiten letras",
          },
        ]}
      >
        <Input name="name" onChange={handleStateData} value={infoUser.name} />
      </Form.Item>

      <Form.Item<FieldType>
        label="Apellidos"
        name="lastName"
        rules={[
          {
            required: true,
            message: "El apellido es obligatorio",
          },
          {
            pattern: /^[a-zA-ZÀ-ÿ\s]+$/,
            message: "Solo se permiten letras",
          },
        ]}
      >
        <Input
          name="lastName"
          onChange={handleStateData}
          value={infoUser.lastName}
        />
      </Form.Item>

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
        <Input name="email" onChange={handleStateData} value={infoUser.email} />
      </Form.Item>

      <Form.Item<FieldType>
        label="Celular"
        name="phone"
        rules={[
          {
            required: true,
            message: "El celular es obligatorio",
          },
          {
            pattern: /^[0-9]{8}$/,
            message: "Ingrese un numero de celular para poder contactarlo",
          },
        ]}
      >
        <Input name="phone" onChange={handleStateData} value={infoUser.phone} />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormContacts;
