// COMPONENTS
import { PhotoProfile } from "@/components/images";
import { Bibliography } from "@/components/userInfo";
// HOOKS
import React from "react";
// REDUX
// INTERFACE
// LIBRARY
// CSS
import "@/styles/text.styles.css";
import "./owners.css";
// JAVASCRIP
import { listUsers } from "@/tools/user.tools";

function Owners() {
  return (
    <div>
      <p className="title">¿Quienes somos?</p>
      <div className="flex flex-col md:flex-row items-center justify-center flex-wrap ">
        {listUsers.map((info, index) => {
          return (
            <div
              key={index}
              className="conteiner-data mt-2 mb-2 ml-0 md:ml-40 md:first:ml-0"
              >
              <PhotoProfile srcImage={info.photo} />
              <div className="container-personal-info">
                <Bibliography about={info.aboutMe} />
                <span className="info-full-name">
                  {info.name} {info.lastName}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Owners;
