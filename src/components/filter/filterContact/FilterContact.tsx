"use client";
// COMPONENTS
// HOOKS
import React, { useState, useEffect } from "react";
// REDUX
// INTERFACE
import { FilterData, Order, SearchData } from "./filter-interface";
// LIBRARY
import { Button, Input, Select } from "antd";
// CSS
import "@/styles/text.styles.css";
// JAVASCRIP

function FilterContact() {
  const [flag, setFlag] = useState(true);
  const [flagSelect, setFlagSelect] = useState(false);
  const [searchPhone, setSearchPhone] = useState<string>("");
  const [search, setSearch] = useState<FilterData>({
    data: "",
    order: "",
  });

  const handleSearchSelect = (value: SearchData) => {
    setSearch({
      ...search,
      data: value,
    });
  };

  const handleSearchOrder = (value: Order) => {
    setSearch({
      ...search,
      order: value,
    });
  };

  const handleSearchPhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPhone(event.target.value);
  };

  const handleSearch = (value: string) => {
    console.log(`selected ${value}`);
  };

  const handleClear = () => {
    setFlag(true);
    setFlagSelect(false);
    setSearchPhone("");
    setSearch({
      data: "",
      order: "",
    });
  };

  useEffect(() => {
    if (searchPhone.length && (search.data === "" || search.order === "")) {
      setFlagSelect(true);
    } else if (
      !searchPhone.length &&
      (search.data === "" || search.order === "")
    ) {
      setFlagSelect(false);
    }

    if ((search.data || search.order) && !searchPhone.length) {
      setFlag(false);
    } else if (search.data === "" || search.order === "") {
      setFlag(true);
    }
  }, [search, searchPhone]);

  return (
    <div className="bg-[#f8f9fa] p-5 ml-2 mr-2 mb-7 rounded-md">
      <h1 className="title-search mb-2 text-[20px] font-medium ">
        Buscar personas :
      </h1>
      <div className="flex flex-col justify-center mb-2 w-full">
        <div className="flex items-center">
          <p className="title-search"> Nombre o Fecha: </p>
          <Select
            value={search.data}
            disabled={flagSelect}
            className="ml-2"
            style={{ width: 120 }}
            onChange={handleSearchSelect}
            options={[
              { value: "", label: "" },
              { value: "name", label: "Nombre" },
              { value: "date", label: "Fecha" },
            ]}
          />
        </div>
        <div className="flex items-center mt-4 mb-2">
          <h1>Orden:</h1>
          <Select
            value={search.order}
            disabled={flagSelect}
            className="ml-2"
            style={{ width: 150 }}
            onChange={handleSearchOrder}
            options={[
              { value: "", label: "" },
              { value: "asc", label: "Ascendente" },
              { value: "desc", label: "Descendente" },
            ]}
          />
        </div>
      </div>
      <div className="flex flex-row items-center mb-2">
        <p className="title-search mr-2">Celular:</p>
        <Input
          onChange={handleSearchPhone}
          placeholder="75712066"
          disabled={!flag ? true : false}
          className="w-28"
          maxLength={8}
        />
      </div>
      <div className="flex flex-row justify-center items-center mt-5">
        <Button className="title-search">Buscar</Button>
        <Button className="title-search ml-5" onClick={handleClear}>
          Limpiar
        </Button>
      </div>
    </div>
  );
}

export default FilterContact;
