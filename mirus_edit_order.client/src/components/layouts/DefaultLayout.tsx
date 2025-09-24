import { Layout } from "antd";
import "./DefaultLayout.less";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <Layout className={"default-layout"}>
      <Outlet />
    </Layout>
  );
};

export default DefaultLayout;
