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
  return <Image width={200} src={srcImage} preview={false} />;
}

export default PhotoProfile;
