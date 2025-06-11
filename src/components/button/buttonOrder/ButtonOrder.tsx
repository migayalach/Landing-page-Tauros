"use client";
import { Button } from "antd";
import React from "react";
import { DownloadOutlined } from "@ant-design/icons";

function ButtonOrder() {

  const handleAction = () => {
    alert("order");
  };

  return (
    <>
      <Button
        type="primary"
        shape="circle"
        icon={<DownloadOutlined />}
        onClick={handleAction}
      />
    </>
  );
}

export default ButtonOrder;
