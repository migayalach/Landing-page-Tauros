"use client";
// COMPONENTS
import Feedback from "@/components/card/feedback/Feedback";
// HOOKS
import React, { useEffect, useState } from "react";
// REDUX
// INTERFACE
import {
  FeedbackInterface,
  FeedbackListInterface,
  InputProduct,
} from "@/interface/index";
// LIBRARY
// CSS
// JAVASCRIP
import { listProducts, listFeedback } from "@/tools/product.tools";
import { ImageProduct } from "@/components";

type PageProps = {
  params: {
    idProduct: string;
  };
};

function Page({ params }: PageProps) {
  const { idProduct } = params;
  const [feedbackList, setFeedbackList] = useState<FeedbackInterface[]>([]);
  const [product, setProduct] = useState<InputProduct>({
    idProduct: "",
    productName: "",
    price: "",
    images: [],
    description: "",
  });

  useEffect(() => {
    if (idProduct.length) {
      const foundProduct = listProducts.find(
        (index) => index.idProduct === idProduct
      );

      if (foundProduct) {
        setProduct({
          idProduct: foundProduct?.idProduct,
          productName: foundProduct?.productName,
          price: foundProduct?.price,
          images: [...foundProduct.images],
          description: foundProduct?.description,
        });
      }

      const info = listFeedback.find(
        (item: FeedbackListInterface) => item.idProduct === idProduct
      );

      if (info) {
        setFeedbackList(info.feedback);
      }
    }
  }, [idProduct]);

  useEffect(() => {
    return () => {
      setFeedbackList([]);
      setProduct({
        idProduct: "",
        productName: "",
        price: "",
        images: [],
        description: "",
      });
    };
  }, []);

  return (
    <div>
      <div>
        <h1>{product.productName}</h1>
        <ImageProduct listImages={product.images} />
        <h2>{product.description}</h2>
        <span>Bs.- {product.price}</span>
      </div>
      <div>
        <Feedback />
      </div>
    </div>
  );
}

export default Page;
