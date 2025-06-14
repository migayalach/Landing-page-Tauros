// COMPONENTS
// HOOKS
import React from "react";
import Link from "next/link";
// REDUX
// INTERFACE
// LIBRARY
import { Button } from "antd";
// CSS
import "./button-more-about.css";
// JAVASCRIP

function ButtonMoreAbout({ productId }: { productId: string }) {
  return (
    <Button color="cyan" variant="solid" className="button-more-about">
      <Link href={`/${productId}`}>
        <span>Saber más</span>
      </Link>
    </Button>
  );
}

export default ButtonMoreAbout;
