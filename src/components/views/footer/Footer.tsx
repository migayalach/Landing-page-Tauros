// COMPONENTS
import { ButtonOurNetworks } from "@/components/button";
import Calls from "../calls/Calls";
// HOOKS
import React from "react";
// REDUX
// INTERFACE
// LIBRARY
// CSS
// JAVASCRIP

function Footer() {
  return (
    <div className="flex flex-col ">
      <Calls />
      <div>
        <h1>Nuestras redes</h1>
        <ButtonOurNetworks title="facebook" icon="facebookIcon" />
        <ButtonOurNetworks title="instagram" icon="instagramIcon" />
        <ButtonOurNetworks title="tiktok" icon="tiktokIcon" />
      </div>
    </div>
  );
}

export default Footer;
