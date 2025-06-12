// COMPONENTS
import { ImageModal } from "@/components/images";
// HOOKS
import React from "react";
// REDUX
// INTERFACE
// LIBRARY
import { Carousel } from "antd";
// JAVASCRIP
import { listImages } from "@/tools/listImages.tools";
// CSS
const contentStyle: React.CSSProperties = {
  height: "500px",
  color: "#fff",
  lineHeight: "500px",
  textAlign: "center",
  background: "#fcca46",
};

function CarouselInfo() {
  return (
    <Carousel autoplay autoplaySpeed={5000}>
      {listImages?.map((item, index) => (
        <div key={index}>
          <h3 style={contentStyle}>
            <ImageModal src={item} />
          </h3>
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselInfo;
