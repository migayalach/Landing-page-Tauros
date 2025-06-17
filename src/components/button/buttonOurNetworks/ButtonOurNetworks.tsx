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
      <Button type="text" shape="circle">
        {icon === "facebookIcon" && <FacebookOutlined href="#" />}
        {icon === "instagramIcon" && <InstagramOutlined href="#" />}
        {icon === "tiktokIcon" && <TikTokOutlined href="#" />}
      </Button>
    </Tooltip>
  );
}

export default ButtonOurNetworks;
