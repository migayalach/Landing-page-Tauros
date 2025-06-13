// COMPONENTS
// HOOKS
import React from "react";
// REDUX
// INTERFACE
// LIBRARY
// CSS
// JAVASCRIP
import { listUsers } from "@/tools/user.tools";
import { PhotoProfile } from "../images";
import Bibliography from "./bibliography/Bibliography";

function UserInfo() {
  return (
    <div>
      <h1>¿Quienes somos?</h1>
      {listUsers.map((info, index) => {
        return (
          <div key={index}>
            <PhotoProfile srcImage={info.photo} />
            <span>{info.name}</span>
            <p>{info.aboutMe}</p>
            <Bibliography />
          </div>
        );
      })}
      <div></div>
    </div>
  );
}

export default UserInfo;
