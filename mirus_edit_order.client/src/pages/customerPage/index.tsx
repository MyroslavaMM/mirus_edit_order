import type { FC } from "react";
import "./index.less";
import ContentLayout from "../../components/layouts/ContentLayout";
import MainLayout from "../../components/layouts/MainLayout";
import CustomerContent from "../../components/customerContent";
import { useParams } from "react-router-dom";

const CustomerPage: FC = () => {
  const { id } = useParams();

  return (
    <ContentLayout>
      <MainLayout headerTitle={`Edit Order ${id}`}>
        <CustomerContent />
      </MainLayout>
    </ContentLayout>
  );
};

export default CustomerPage;
