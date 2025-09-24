// import {
//   Button,
//   Checkbox,
//   Dropdown,
//   Row,
//   Table,
//   Tag,
//   type MenuProps,
// } from "antd";
// import type { FC } from "react";
// import "./index.less";
// import { MoreOutlined } from "@ant-design/icons";
// import type { ColumnsType } from "antd/es/table";

// const TagColor = (status: string): string => {
//   switch (status.toLowerCase()) {
//     case "placed":
//       return "green";
//     case "rejected":
//       return "red";
//     case "pending":
//       return "orange";
//     default:
//       return "#d9d9d9";
//   }
// };
// type DataType = {
//   key: string;
//   church: string;
//   orderID: string;
//   createDate: string;
//   deliveryPeriod: string;
//   shipTo: string;
//   datePlaced: string;
//   trackingNumber: string;
//   churchNo: string;
//   churchContact: string;
//   programYear: string;
//   status: string;
//   placedBy: string;
//   tfOrderNumber: string;
//   faxHardCopy: string;
//   doNotContactChurch: boolean;
//   orderType: string;
//   selfSponsor: boolean;
//   responseDate: string;
// };

// const AdminTable: FC = () => {
//   const dataSource = [
//     {
//       key: "1",
//       church: "St. Gall Church",
//       orderID: "105380",
//       createDate: "03/06/2025",
//       deliveryPeriod: "September",
//       shipTo: "Church",
//       datePlaced: "08/21/2025",
//       trackingNumber: "1Z08372X",
//       churchNo: "RCK-1015",
//       churchContact: "Lisa Long",
//       programYear: "2026",
//       status: "placed",
//       placedBy: "Arika French",
//       tfOrderNumber: "12-J1N0G0",
//       faxHardCopy: "N/A",
//       doNotContactChurch: false,
//       orderType: "Regular",
//       selfSponsor: false,
//       responseDate: "05/07/2025",
//     },
//     {
//       key: "2",
//       church: "St. Gall Church",
//       orderID: "105380",
//       createDate: "03/06/2025",
//       deliveryPeriod: "September",
//       shipTo: "Church",
//       datePlaced: "08/21/2025",
//       trackingNumber: "1Z08372X",
//       churchNo: "RCK-1015",
//       churchContact: "Lisa Long",
//       programYear: "2026",
//       status: "pending",
//       placedBy: "Arika French",
//       tfOrderNumber: "12-J1N0G0",
//       faxHardCopy: "N/A",
//       doNotContactChurch: true,
//       orderType: "Regular",
//       selfSponsor: true,
//       responseDate: "05/07/2025",
//     },
//   ];

//   const actionsItems = (): MenuProps["items"] => {
//     return [
//       {
//         key: "1",
//         label: (
//           <Row className={"admin-table-actions-wrapper"}>
//             <Button
//               color="primary"
//               variant="outlined"
//               className={"table-action approve"}
//             >
//               Approve
//             </Button>
//             <Button
//               color="danger"
//               variant="outlined"
//               className={"table-action reject"}
//             >
//               Reject
//             </Button>
//           </Row>
//         ),
//       },
//     ];
//   };

//   const columns: ColumnsType<DataType> = [
//     {
//       title: "Church",
//       dataIndex: "church",
//       key: "church",
//     },
//     {
//       title: "Order ID",
//       dataIndex: "orderID",
//       key: "orderID",
//     },
//     {
//       title: "Create Date",
//       dataIndex: "createDate",
//       key: "createDate",
//     },
//     {
//       title: "Delivery Period",
//       dataIndex: "deliveryPeriod",
//       key: "deliveryPeriod",
//     },
//     {
//       title: "Ship To",
//       dataIndex: "shipTo",
//       key: "shipTo",
//     },
//     {
//       title: "Date Placed",
//       dataIndex: "datePlaced",
//       key: "datePlaced",
//     },
//     {
//       title: "Tracking Number",
//       dataIndex: "trackingNumber",
//       key: "trackingNumber",
//     },
//     {
//       title: "Church No",
//       dataIndex: "churchNo",
//       key: "churchNo",
//     },
//     {
//       title: "ChuChurch Contact",
//       dataIndex: "churchContact",
//       key: "churchContact",
//     },
//     {
//       title: "Program Year",
//       dataIndex: "programYear",
//       key: "programYear",
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       render: (_: any, record: any) => (
//         <Tag color={TagColor(record.status)}>{record.status.toUpperCase()}</Tag>
//       ),
//     },
//     {
//       title: "Placed By",
//       dataIndex: "placedBy",
//       key: "placedBy",
//     },
//     {
//       title: "TF Order Number",
//       dataIndex: "tfOrderNumber",
//       key: "tfOrderNumber",
//     },
//     {
//       title: "Fax Hard Copy",
//       dataIndex: "faxHardCopy",
//       key: "faxHardCopy",
//     },
//     {
//       title: "Do Not Contact Church",
//       dataIndex: "doNotContactChurch",
//       key: "doNotContactChurch",
//       render: (_, record) => (
//         <div style={{ display: "flex", justifyContent: "center" }}>
//           <Checkbox checked={record.doNotContactChurch} disabled />
//         </div>
//       ),
//     },
//     {
//       title: "Order Type",
//       dataIndex: "orderType",
//       key: "orderType",
//     },
//     {
//       title: "Self Sponsor",
//       dataIndex: "selfSponsor",
//       key: "selfSponsor",
//       render: (_, record) => (
//         <div style={{ display: "flex", justifyContent: "center" }}>
//           <Checkbox checked={record.selfSponsor} disabled />
//         </div>
//       ),
//     },
//     {
//       title: "Response Date",
//       dataIndex: "responseDate",
//       key: "responseDate",
//     },
//     {
//       title: "Action",
//       key: "action",
//       fixed: "right",
//       width: 100,
//       className: "table-action-column",
//       render: (_: any) => (
//         <Dropdown
//           trigger={["click"]}
//           placement={"bottomRight"}
//           menu={{ items: actionsItems() }}
//         >
//           <Button className={"more-actions"} icon={<MoreOutlined />}></Button>
//         </Dropdown>
//       ),
//     },
//   ];
//   return (
//     <Table
//       columns={columns}
//       dataSource={dataSource}
//       pagination={{ position: ["bottomLeft"] }}
//       scroll={{ x: true }}
//       bordered
//     />
//   );
// };

// export default AdminTable;

import {
  Button,
  Checkbox,
  Dropdown,
  Modal,
  Row,
  Table,
  Tag,
  type MenuProps,
} from "antd";
import { Fragment, useEffect, useState, type FC } from "react";
import "./index.less";
import { MoreOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import CustomDrawer from "../cutomDrawer";

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
    doNotContactChurch: true,
    orderType: "Regular",
    selfSponsor: true,
    responseDate: "05/07/2025",
  },
];

const AdminTable: FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [selectedRecord, setSelectedRecord] = useState<string | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<DataType | null>(null);

  useEffect(() => {
    setSelectedOrder(
      dataSource.find((item) => item.orderID === selectedRecord)!
    );
  }, [selectedRecord]);

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

  const handleOpenModal = (orderId: string) => {
    setSelectedRecord(orderId);
    setOpenDrawer(true);
  };

  const handleCloseModal = () => {
    setSelectedRecord(null);
    setOpenDrawer(false);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Church",
      dataIndex: "church",
      key: "church",
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            handleOpenModal(record.orderID);
          },
        };
      },
    },
    {
      title: "Order ID",
      dataIndex: "orderID",
      key: "orderID",
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            handleOpenModal(record.orderID);
          },
        };
      },
    },
    {
      title: "Create Date",
      dataIndex: "createDate",
      key: "createDate",
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            handleOpenModal(record.orderID);
          },
        };
      },
    },
    // {
    //   title: "Delivery Period",
    //   dataIndex: "deliveryPeriod",
    //   key: "deliveryPeriod",
    //   onCell: (record, rowIndex) => {
    //     return {
    //       onClick: () => {
    //         handleOpenModal(record.orderID);
    //       },
    //     };
    //   },
    // },
    // {
    //   title: "Ship To",
    //   dataIndex: "shipTo",
    //   key: "shipTo",
    //   onCell: (record, rowIndex) => {
    //     return {
    //       onClick: () => {
    //         handleOpenModal(record.orderID);
    //       },
    //     };
    //   },
    // },
    // {
    //   title: "Date Placed",
    //   dataIndex: "datePlaced",
    //   key: "datePlaced",
    //   onCell: (record, rowIndex) => {
    //     return {
    //       onClick: () => {
    //         handleOpenModal(record.orderID);
    //       },
    //     };
    //   },
    // },
    // {
    //   title: "Tracking Number",
    //   dataIndex: "trackingNumber",
    //   key: "trackingNumber",
    // },
    {
      title: "Church No",
      dataIndex: "churchNo",
      key: "churchNo",
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            handleOpenModal(record.orderID);
          },
        };
      },
    },
    {
      title: "Church Contact",
      dataIndex: "churchContact",
      key: "churchContact",
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            handleOpenModal(record.orderID);
          },
        };
      },
    },
    {
      title: "Program Year",
      dataIndex: "programYear",
      key: "programYear",
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            handleOpenModal(record.orderID);
          },
        };
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_: any, record: any) => (
        <Tag color={TagColor(record.status)}>{record.status.toUpperCase()}</Tag>
      ),
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            handleOpenModal(record.orderID);
          },
        };
      },
    },
    // {
    //   title: "Placed By",
    //   dataIndex: "placedBy",
    //   key: "placedBy",
    // },
    // {
    //   title: "TF Order Number",
    //   dataIndex: "tfOrderNumber",
    //   key: "tfOrderNumber",
    // },
    // {
    //   title: "Fax Hard Copy",
    //   dataIndex: "faxHardCopy",
    //   key: "faxHardCopy",
    //   onCell: (record, rowIndex) => {
    //     return {
    //       onClick: () => {
    //         handleOpenModal(record.orderID);
    //       },
    //     };
    //   },
    // },
    {
      title: "Do Not Contact Church",
      dataIndex: "doNotContactChurch",
      key: "doNotContactChurch",
      render: (_, record) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Checkbox checked={record.doNotContactChurch} disabled />
        </div>
      ),
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            handleOpenModal(record.orderID);
          },
        };
      },
    },
    // {
    //   title: "Order Type",
    //   dataIndex: "orderType",
    //   key: "orderType",
    // },
    {
      title: "Self Sponsor",
      dataIndex: "selfSponsor",
      key: "selfSponsor",
      render: (_, record) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Checkbox checked={record.selfSponsor} disabled />
        </div>
      ),
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            handleOpenModal(record.orderID);
          },
        };
      },
    },
    {
      title: "Response Date",
      dataIndex: "responseDate",
      key: "responseDate",
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            handleOpenModal(record.orderID);
          },
        };
      },
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
          <Button
            onClick={(e) => e.stopPropagation()}
            className={"more-actions"}
            icon={<MoreOutlined />}
          ></Button>
        </Dropdown>
      ),
    },
  ];
  return (
    <Fragment>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{ position: ["bottomLeft"] }}
        scroll={{ x: true }}
        bordered
      />
      <CustomDrawer
        width={600}
        title={"Order Details"}
        open={openDrawer}
        onClose={() => handleCloseModal()}
        footer={
          <Row style={{ justifyContent: "end", gap: 10 }}>
            <Row style={{ gap: 10 }}>
              <Button
                color="primary"
                variant="outlined"
                style={{ marginRight: 8, height: 30 }}
              >
                Approve
              </Button>
              <Button color="danger" variant="outlined" style={{ height: 30 }}>
                Reject
              </Button>
            </Row>
          </Row>
        }
      />
    </Fragment>
  );
};

export default AdminTable;
