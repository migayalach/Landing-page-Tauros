"use client";
// COMPONENTS
import Feedback from "@/components/card/feedback/Feedback";
import { ButtonOrder, ImageProduct } from "@/components";
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
import "./product-item.css";
// JAVASCRIP
import { listProducts, listFeedback } from "@/tools/product.tools";

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
    <>
      <div className="pt-20 pb-5">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="column-1">
            <h1 className="name-product">{product.productName}</h1>
            <div className="md:ml-10">
              <ImageProduct listImages={product.images} />
            </div>
          </div>
          <div className="mb-6 mr-3 ml-3 text-[19px] md:text-[22px] md:p-12 md:leading-loose">
            <p>{product.description}</p>
          </div>
        </div>
        <div className="pr-3 pl-3">
          <Feedback listFeedback={feedbackList} />
        </div>
      </div>
      <ButtonOrder />
    </>
  );
}

export default Page;
