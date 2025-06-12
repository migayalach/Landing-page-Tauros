// COMPONENTS
// HOOKS
import React from "react";
// REDUX
// INTERFACE
// LIBRARY
// CSS
// JAVASCRIP
import { listProducts } from "@/tools/product.tools";
import Acard from "./aCard/Acard";

function Card() {
  return (
    <div>
      <h1>Productos:</h1>
      {listProducts.map((info, index) => {
        return (
          <div key={index}>
            <Acard infoProduct={info} />
          </div>
        );
      })}
    </div>
  );
}

export default Card;
