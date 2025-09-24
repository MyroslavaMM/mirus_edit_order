import type { FC } from "react";
import "./index.less";
import { Menu, type MenuProps } from "antd";
import { HomeOutlined } from "@ant-design/icons";
type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "home",
    label: <HomeOutlined />,
  },
];

const AsideMenu: FC = () => {
  return (
    <Menu
      defaultSelectedKeys={["home"]}
      rootClassName={"aside-menu"}
      items={items}
    />
  );
};

export default AsideMenu;
