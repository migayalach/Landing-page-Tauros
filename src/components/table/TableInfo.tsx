"use client";
// COMPONENTS
// HOOKS
import React from "react";
// REDUX
// INTERFACE
import { DataContact } from "@/interface";
// LIBRARY
import { Table } from "antd";
// CSS
// JAVASCRIP
import { listContacts } from "@/tools/user.tools";

function TableInfo() {
  const columns = [
    { title: "N°", dataIndex: "numberItem", key: "numberItem", width: 5 },
    { title: "Nombre", dataIndex: "name", key: "name", width: 5 },
    { title: "Apellido", dataIndex: "lastName", key: "lastName", width: 170 },
    { title: "Celular", dataIndex: "phone", key: "phone", width: 20 },
    { title: "Email", dataIndex: "email", key: "email", width: 10 },
    { title: "Fecha", dataIndex: "date", key: "date", width: 120 },
  ];

  const renderList = (listContacts: DataContact[]) => {
    return listContacts.map(
      ({ idContact, name, lastName, phone, email, date }, index) => ({
        key: idContact,
        numberItem: index + 1,
        name,
        lastName,
        phone,
        email,
        date,
      })
    );
  };

  return (
    <div className="w-full overflow-x-auto">
      <Table
        columns={columns}
        dataSource={renderList(listContacts)}
        pagination={{
          pageSize: 15,
          position: ["bottomCenter"],
        }}
      />
    </div>
  );
}

export default TableInfo;
