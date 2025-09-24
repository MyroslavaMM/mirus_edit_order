import type { FC, PropsWithChildren } from "react";
import "./MainLayout.less";
import { Row } from "antd";
import Header from "../header";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Row className={"main-layout"}>
      <Header />
      <div className={"main-layput-content"}>{children}</div>
    </Row>
  );
};

export default MainLayout;
