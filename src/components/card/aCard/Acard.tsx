// COMPONENTS
import Description from "../description/Description";
import { ImageProduct } from "@/components/images";
// HOOKS
import React from "react";
import Link from "next/link";
// REDUX
// INTERFACE
import { InputProduct } from "@/interface/InputAcard.interface";
// LIBRARY
import { Card, Col, Row } from "antd";
// CSS
// JAVASCRIP

function Acard({ infoProduct }: { infoProduct: InputProduct }) {
  return (
    <Row gutter={16}>
      <Col span={8}>
        <Card title={infoProduct.productName}>
          <ImageProduct listImages={infoProduct.images} />
        </Card>
        <Link href={`/${infoProduct.idProduct}`}>
          <p>Precio: Bs.- {infoProduct.price}</p>
          <h1>{infoProduct.productName}</h1>
          <Description text={infoProduct.description} />
        </Link>
      </Col>
    </Row>
  );
}

export default Acard;
