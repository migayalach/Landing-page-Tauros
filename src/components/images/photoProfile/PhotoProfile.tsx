// COMPONENTS
// HOOKS
import React from "react";
// REDUX
// INTERFACE
// LIBRARY
import { Image } from "antd";
// CSS
// JAVASCRIP

function PhotoProfile({ srcImage }: { srcImage: string }) {
  return (
    <Image
      style={{ borderRadius: "25px", position: "absolute" }}
      width={380}
      height={500}
      src={srcImage}
      preview={false}
    />
  );
}

export default PhotoProfile;
