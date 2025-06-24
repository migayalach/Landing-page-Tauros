// COMPONENTS
import { FilterContact, Table } from "@/components";
// HOOKS
import React from "react";
// REDUX
// INTERFACE
// LIBRARY
// CSS
import "@/styles/text.styles.css";
// JAVASCRIP

function page() {
  return (
    <div className="md:pt-20 md:pl-20 md:pr-20 mt-20 flex flex-col w-full justify-center">
      <h1 className="title mb-3">Lista de personas:</h1>
      <FilterContact />
      <Table />
    </div>
  );
}

export default page;
