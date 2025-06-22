// COMPONENTS
// HOOKS
import React from "react";
// REDUX
// INTERFACE
// LIBRARY
import { Button, Tooltip } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TikTokOutlined,
} from "@ant-design/icons";
// CSS
// JAVASCRIP

function ButtonOurNetworks({ title, icon }: { title: string; icon: string }) {
  return (
    <Tooltip title={title}>
      <Button
        type="text"
        shape="circle"
        className="hover:bg-blue-100 transition-colors duration-300 text-[#1b1b32] shadow-md hover:shadow-lg"
      >
        {icon === "facebookIcon" && (
          <a
            href="https://www.facebook.com/colagenotaurus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FacebookOutlined style={{ fontSize: 20 }} />
          </a>
        )}
        {icon === "tiktokIcon" && (
          <a
            href="https://www.tiktok.com/@colagenotaurus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-700"
          >
            <TikTokOutlined style={{ fontSize: 20 }} />
          </a>
        )}
        {icon === "instagramIcon" && (
          <a
            href="https://www.instagram.com/chavezmiguelayala/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700"
          >
            <InstagramOutlined style={{ fontSize: 20 }} />
          </a>
        )}
      </Button>
    </Tooltip>
  );
}

export default ButtonOurNetworks;
