// COMPONENTS
import { Acard } from "@/components/card";
// HOOKS
import React from "react";
// REDUX
// INTERFACE
// LIBRARY
// CSS
import "@/styles/text.styles.css";
// JAVASCRIP
import { listProducts } from "@/tools/product.tools";

function Products() {
  return (
    <div>
      <p className="title">Productos</p>
      <div className="flex flex-col md:flex-row items-center justify-around flex-wrap">
        {listProducts.map((info, index) => {
          return (
            <div key={index} className="m-2">
              <Acard infoProduct={info} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
