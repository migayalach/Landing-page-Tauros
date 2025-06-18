"use client";
// COMPONENTS
// HOOKS
import React from "react";
// REDUX
// INTERFACE
// LIBRARY
import { WhatsAppOutlined } from "@ant-design/icons";
// CSS
// JAVASCRIP

function ButtonOrder() {
  const handleSendMessage = () => {
    const phone = `${process.env.NEXT_PUBLIC_PHONE}`;
    const message =
      "Hola, quiero más información de como puedo adquirir productos.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleSendMessage}
      className="fixed bottom-6 right-6 bg-[#25d366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all z-50"
      aria-label="Contáctanos por WhatsApp"
    >
      <WhatsAppOutlined style={{ fontSize: "24px" }} />
    </button>
  );
}

export default ButtonOrder;
