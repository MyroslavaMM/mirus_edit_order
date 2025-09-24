import { Button, Dropdown, Row, Table, Tag, type MenuProps } from "antd";
import type { FC } from "react";
import "./index.less";
import { MoreOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

const TagColor = (status: string): string => {
  switch (status.toLowerCase()) {
    case "placed":
      return "green";
    case "rejected":
      return "red";
    case "pending":
      return "orange";
    default:
      return "#d9d9d9";
  }
};
type DataType = {
  key: string;
  church: string;
  orderID: string;
  createDate: string;
  deliveryPeriod: string;
  shipTo: string;
  datePlaced: string;
  trackingNumber: string;
  churchNo: string;
  churchContact: string;
  programYear: string;
  status: string;
  placedBy: string;
  tfOrderNumber: string;
  faxHardCopy: string;
  doNotContactChurch: boolean;
  orderType: string;
  selfSponsor: boolean;
  responseDate: string;
};

const AdminTable: FC = () => {
  const dataSource = [
    {
      key: "1",
      church: "St. Gall Church",
      orderID: "105380",
      createDate: "03/06/2025",
      deliveryPeriod: "September",
      shipTo: "Church",
      datePlaced: "08/21/2025",
      trackingNumber: "1Z08372X",
      churchNo: "RCK-1015",
      churchContact: "Lisa Long",
      programYear: "2026",
      status: "placed",
      placedBy: "Arika French",
      tfOrderNumber: "12-J1N0G0",
      faxHardCopy: "N/A",
      doNotContactChurch: false,
      orderType: "Regular",
      selfSponsor: false,
      responseDate: "05/07/2025",
    },
    {
      key: "2",
      church: "St. Gall Church",
      orderID: "105380",
      createDate: "03/06/2025",
      deliveryPeriod: "September",
      shipTo: "Church",
      datePlaced: "08/21/2025",
      trackingNumber: "1Z08372X",
      churchNo: "RCK-1015",
      churchContact: "Lisa Long",
      programYear: "2026",
      status: "pending",
      placedBy: "Arika French",
      tfOrderNumber: "12-J1N0G0",
      faxHardCopy: "N/A",
      doNotContactChurch: false,
      orderType: "Regular",
      selfSponsor: false,
      responseDate: "05/07/2025",
    },
  ];

  const actionsItems = (): MenuProps["items"] => {
    return [
      {
        key: "1",
        label: (
          <Row className={"admin-table-actions-wrapper"}>
            <Button
              color="primary"
              variant="outlined"
              className={"table-action approve"}
            >
              Approve
            </Button>
            <Button
              color="danger"
              variant="outlined"
              className={"table-action reject"}
            >
              Reject
            </Button>
          </Row>
        ),
      },
    ];
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Church",
      dataIndex: "church",
      key: "church",
    },
    {
      title: "Order ID",
      dataIndex: "orderID",
      key: "orderID",
    },
    {
      title: "Create Date",
      dataIndex: "createDate",
      key: "createDate",
    },
    {
      title: "Delivery Period",
      dataIndex: "deliveryPeriod",
      key: "deliveryPeriod",
    },
    {
      title: "Ship To",
      dataIndex: "shipTo",
      key: "shipTo",
    },
    {
      title: "Date Placed",
      dataIndex: "datePlaced",
      key: "datePlaced",
    },
    {
      title: "Tracking Number",
      dataIndex: "trackingNumber",
      key: "trackingNumber",
    },
    {
      title: "Church No",
      dataIndex: "churchNo",
      key: "churchNo",
    },
    {
      title: "ChuChurch Contact",
      dataIndex: "churchContact",
      key: "churchContact",
    },
    {
      title: "Program Year",
      dataIndex: "programYear",
      key: "programYear",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_: any, record: any) => (
        <Tag color={TagColor(record.status)}>{record.status.toUpperCase()}</Tag>
      ),
    },
    {
      title: "Placed By",
      dataIndex: "placedBy",
      key: "placedBy",
    },
    {
      title: "TF Order Number",
      dataIndex: "tfOrderNumber",
      key: "tfOrderNumber",
    },
    {
      title: "Fax Hard Copy",
      dataIndex: "faxHardCopy",
      key: "faxHardCopy",
    },
    {
      title: "Do Not Contact Church",
      dataIndex: "doNotContactChurch",
      key: "doNotContactChurch",
    },
    {
      title: "Order Type",
      dataIndex: "orderType",
      key: "orderType",
    },
    {
      title: "Self Sponsor",
      dataIndex: "selfSponsor",
      key: "selfSponsor",
    },
    {
      title: "Response Date",
      dataIndex: "responseDate",
      key: "responseDate",
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 100,
      className: "table-action-column",
      render: (_: any) => (
        <Dropdown
          trigger={["click"]}
          placement={"bottomRight"}
          menu={{ items: actionsItems() }}
        >
          <Button className={"more-actions"} icon={<MoreOutlined />}></Button>
        </Dropdown>
      ),
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={{ position: ["bottomLeft"] }}
      scroll={{ x: true }}
      bordered
    />
  );
};

export default AdminTable;
