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
          <h1 className="text-[#1b1b32]">¡Síguenos en las redes! <span className="text-[20px]">👉🏻</span></h1>
          <div className="flex flex-row justify-around gap-5 pl-12">
            <ButtonOurNetworks title="facebook" icon="facebookIcon" />
            <ButtonOurNetworks title="tiktok" icon="tiktokIcon" />
            <ButtonOurNetworks title="instagram" icon="instagramIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
