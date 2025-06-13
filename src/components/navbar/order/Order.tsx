import React from "react";
import { Col, Row } from "antd";
import { ButtonOrder } from "@/components/button";

function Order() {
  return (
    <div>
      <Row>
        <Col span={18}>
          Realiza tus pedidos aqui <i>👉</i>
        </Col>
        <Col span={6}>
          <ButtonOrder />
        </Col>
      </Row>
    </div>
  );
}

export default Order;
