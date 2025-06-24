"use client";
// COMPONENTS
// HOOKS
import React, { useState } from "react";
// REDUX
// INTERFACE
import { FilterData } from "./filter-interface";
import type { CheckboxProps } from "antd";
// LIBRARY
import { Button, Checkbox, Input, Select } from "antd";
// CSS
import "@/styles/text.styles.css";
// JAVASCRIP

function FilterContact() {
  const [flag, setFlag] = useState(false);
  const [searchPhone, setSearchPhone] = useState<string>("");
  const [search, setSearch] = useState<FilterData>({
    value: "",
    order: "",
  });

  const handleSearchSelect = (value: string) => {
    console.log(value);
  };

  const handleOrder: CheckboxProps["onChange"] = (event) => {
    // console.log(`checked = ${event.target.checked}`);
    // console.log(`checked = ${event.target.value}`);
    // if (event.target.checked) {
    //   setSearch({
    //     ...search,
    //     order: event.target.value,
    //   });
    // } else {
    //   setSearch({
    //     ...search,
    //     order: "",
    //   });
    // }
  };

  const handleSearchPhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPhone(event.target.value);
  };

  const handleSearch = (value: string) => {
    console.log(`selected ${value}`);
  };

  const handleClear = () => {};

  console.log(search);

  return (
    <div className="bg-[#f8f9fa] p-5 ml-2 mr-2 mb-7 rounded-md">
      <h1 className="title-search mb-2 text-[20px] font-medium ">
        Buscar personas :
      </h1>
      <div className="flex justify-between items-center mb-2 w-full">
        <p className="title-search"> Nombre o Fecha: </p>
        <Select
          defaultValue=""
          style={{ width: 120 }}
          onChange={handleSearchSelect}
          options={[
            { value: "", label: "" },
            { value: "name", label: "Nombre" },
            { value: "date", label: "Fecha" },
          ]}
        />
        <div className="flex flex-col">
          <Checkbox
            className="title-search"
            name="asc"
            value={search.order}
            onChange={handleOrder}
          >
            Asc
          </Checkbox>
          <Checkbox
            className="title-search"
            name="desc"
            value={search.order}
            onChange={handleOrder}
          >
            Desc
          </Checkbox>
        </div>
      </div>
      <div className="flex flex-row items-center mb-2">
        <p className="title-search mr-2">Celular:</p>
        <Input
          onChange={handleSearchPhone}
          placeholder="75712066"
          // disabled={!flag ? true : false}
          className="w-28"
        />
      </div>
      <div className="flex flex-row justify-center items-center mt-5">
        <Button className="title-search">Buscar</Button>
        <Button className="title-search ml-5">Limpiar</Button>
      </div>
    </div>
  );
}

export default FilterContact;
