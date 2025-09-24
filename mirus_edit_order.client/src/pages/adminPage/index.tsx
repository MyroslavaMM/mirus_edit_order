import type { FC } from "react";
import ContentLayout from "../../components/layouts/ContentLayout";
import MainLayout from "../../components/layouts/MainLayout";
import AdminTable from "../../components/adminTable";

const AdminPage: FC = () => {
  return (
    <ContentLayout>
      <MainLayout>
        <AdminTable />
      </MainLayout>
    </ContentLayout>
  );
};

export default AdminPage;
