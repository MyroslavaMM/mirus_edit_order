import type { FC } from "react";
import ContentLayout from "../../components/layouts/ContentLayout";
import MainLayout from "../../components/layouts/MainLayout";
import AdminTable from "../../components/adminTable";

const AdminPage: FC = () => {
  return (
    <ContentLayout>
      <MainLayout headerTitle={"Pending Changes"}>
        <AdminTable />
      </MainLayout>
    </ContentLayout>
  );
};

export default AdminPage;
