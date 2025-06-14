"use client";
// COMPONENTS
// HOOKS
import React, { useEffect, useState } from "react";
// REDUX
// INTERFACE
// LIBRARY
import { Image } from "antd";
// CSS
// JAVASCRIP

function ImageProduct({ listImages }: { listImages: string[] }) {
  const [itemsList, setItemsList] = useState<string[]>([]);

  useEffect(() => {
    if (listImages.length) {
      setItemsList([...listImages]);
    }
  }, [listImages]);

  return (
    <Image.PreviewGroup items={itemsList}>
      <Image
        width={369}
        height={250}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          borderRadius: "25px",
        }}
        src={itemsList[0]}
      />
    </Image.PreviewGroup>
  );
}

export default ImageProduct;
