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
    <div
      className="pt-20"
      style={{ paddingLeft: "10px", paddingRight: "10px" }}
    >
      <h1 className="title mb-3">Lista de personas:</h1>
      <FilterContact />
      <Table />
    </div>
  );
}

export default page;
