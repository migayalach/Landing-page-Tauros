// COMPONENTS
import { FormContacts } from "@/components/form";
// HOOKS
import React from "react";
// REDUX
// INTERFACE
// LIBRARY
// CSS
import "./call.css";
// JAVASCRIP

function Calls() {
  return (
    <div>
      <h1 className="title-form">¡Trabaja con nosotros!</h1>
      <div className="flex flex-col md:flex-row justify-around items-center gap-4">
        <div className="w-full md:w-1/2">
          <FormContacts />
        </div>
        <div className="w-full md:w-1/3 pb-5">
          <iframe
            className="w-full aspect-video rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/dsgBpsNPQ50"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Calls;
