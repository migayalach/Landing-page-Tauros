// COMPONENTS
import { ImageProduct } from "@/components/images";
import { ButtonMoreAbout } from "@/components/button";
// HOOKS
import React from "react";
// REDUX
// INTERFACE
import { InputProduct } from "@/interface/InputAcard.interface";
// LIBRARY
// CSS
import "./a-card.css";
import "@/styles/text.styles.css";
// JAVASCRIP

function Acard({ infoProduct }: { infoProduct: InputProduct }) {
  return (
    <div className="acard-container">
      <div className="containter-info">
        <ImageProduct listImages={infoProduct.images} />
        <div className="container-about-product">
          <p className="title-product">{infoProduct.productName}</p>
          <p className="price">
            Precio:
            <span> {infoProduct.price} </span>
            Bs.-
          </p>
          <ButtonMoreAbout productId={infoProduct.idProduct} />
        </div>
      </div>
    </div>
  );
}

export default Acard;
