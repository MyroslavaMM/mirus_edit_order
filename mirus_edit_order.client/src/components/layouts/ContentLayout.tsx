import { Fragment, type FC, type PropsWithChildren } from "react";
import "./ContentLayout.less";
import { Layout, Row, Image } from "antd";
import AsideMenu from "../asideMenu";
import { NavLink } from "react-router-dom";
import menuLogo from "../../../public/logo/logo-mobile.svg";

const ContentLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout className={"content-layout"}>
      <Layout.Sider
        width={70}
        className={"layout-sider"}
        theme={"light"}
        trigger={null}
        collapsedWidth={0}
      >
        <Row className={"aside-menu-wrapper"}>
          <NavLink to={"/"}>
            <Image
              src={menuLogo}
              alt={"logo"}
              preview={false}
              width={35}
              height={35}
            />
          </NavLink>
        </Row>

        <AsideMenu />
      </Layout.Sider>
      <Layout.Content className={"layout-content"}>
        <Fragment>
          <Row className={"content"}>{children}</Row>
        </Fragment>
      </Layout.Content>
    </Layout>
  );
};

export default ContentLayout;
