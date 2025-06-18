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
    <div className="flex flex-col md:flex-col content-center">
      <div>
        <Calls />
      </div>
      <div>
        <hr className="bg-black h-[1px] w-full" />
        <div className="flex flex-row justify-center items-center pt-3 ">
          <h1>¡Síguenos en las redes sociales!</h1>
          <div className="pl-12">
            <ButtonOurNetworks title="facebook" icon="facebookIcon" />
            <ButtonOurNetworks title="instagram" icon="instagramIcon" />
            <ButtonOurNetworks title="tiktok" icon="tiktokIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
