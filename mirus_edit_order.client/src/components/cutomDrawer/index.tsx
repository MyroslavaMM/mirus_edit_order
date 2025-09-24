import { Drawer, type DrawerProps } from "antd";
import "./index.less";
import type { FC, ReactNode } from "react";

const CustomDrawer: FC<DrawerProps & { footer?: ReactNode }> = ({
  footer,
  ...props
}) => {
  return (
    <Drawer
      width={840}
      footer={footer ? footer : null}
      rootClassName={"custom-modal"}
      {...props}
    />
  );
};

export default CustomDrawer;
