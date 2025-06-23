"use client";
import React from "react";
import { Button, Checkbox, Input, Select } from "antd";

function FilterContact() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <div>
        nombre - asc y desc fecha - asc y desc
        <Select
          defaultValue=""
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "", label: "" },
            { value: "lucy", label: "Nombre" },
            { value: "Yiminghe", label: "Fecha" },
          ]}
        />
        <Checkbox>Checkbox</Checkbox>
        <Checkbox>Checkbox</Checkbox>
      </div>
      <div>
        Celular: <Input placeholder="Basic usage" />
      </div>
      <div>
        <Button>Buscar</Button>
        <Button>Limpiar</Button>
      </div>
    </div>
  );
}

export default FilterContact;
