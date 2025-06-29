// COMPONENTS
// HOOKS
import React from "react";
import { Image } from "antd";
// REDUX
// INTERFACE
// LIBRARY
// CSS
// JAVASCRIP

function ImageModal({ src }: { src: string }) {
  return <Image src={src} style={{ marginBottom: "-8px" }} preview={false} />;
}

export default ImageModal;
