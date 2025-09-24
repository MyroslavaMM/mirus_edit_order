import type { FC } from "react";
import "./index.less";
import ContentLayout from "../../components/layouts/ContentLayout";
import MainLayout from "../../components/layouts/MainLayout";

const CustomerPage: FC = () => {
  return (
    <ContentLayout>
      <MainLayout></MainLayout>
    </ContentLayout>
  );
};

export default CustomerPage;
