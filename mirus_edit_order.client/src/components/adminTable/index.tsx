import {
  Button,
  Checkbox,
  Col,
  Descriptions,
  Dropdown,
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
import { dataSource } from "../../data/orderData";

export const TagColor = (status: string): string => {
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
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [selectedRecord, setSelectedRecord] = useState<string | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<DataType | null>(null);

  useEffect(() => {
    setSelectedOrder(
      dataSource.find((item) => item.orderID === selectedRecord)!
    );
  }, [selectedRecord]);
  console.log(selectedOrder);

  const actionsItems = (): MenuProps["items"] => {
    return [
      {
        key: "1",
        label: (
          <Button
            color="primary"
            variant="outlined"
            className={"table-action approve"}
          >
            Approve
          </Button>
        ),
      },
      {
        key: "2",
        label: (
          <Button
            color="danger"
            variant="outlined"
            className={"table-action reject"}
          >
            Reject
          </Button>
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
      onCell: (record) => {
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
      onCell: (record) => {
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
      onCell: (record) => {
        return {
          onClick: () => {
            handleOpenModal(record.orderID);
          },
        };
      },
    },
    {
      title: "Church No",
      dataIndex: "churchNo",
      key: "churchNo",
      onCell: (record) => {
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
      onCell: (record) => {
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
      onCell: (record) => {
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
      onCell: (record) => {
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
        rootClassName={"admin-table"}
        columns={columns}
        dataSource={dataSource}
        scroll={{ x: true }}
        pagination={
          dataSource.length > 10
            ? { pageSize: 10, position: ["bottomLeft"] }
            : false
        }
        bordered
      />
      <CustomDrawer
        width={600}
        title={"Order details"}
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
      >
        {selectedOrder && (
          <Descriptions
            rootClassName={"order-description"}
            column={1}
            bordered
            size="small"
          >
            <Descriptions.Item label="Church" className={"order-detail"}>
              <Row>
                <Col span={10}>
                  <span className={"prev-value"}>{selectedOrder?.church}</span>
                </Col>
                <Col span={10}>
                  <span>{selectedOrder?.church}</span>
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item
              label="Church Contact"
              className={"order-detail"}
            >
              <Row>
                <Col span={10}>
                  <span className={"prev-value"}>
                    {selectedOrder?.churchContact}
                  </span>
                </Col>
                <Col span={10}>
                  <span>{selectedOrder?.churchContact}</span>
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item label="Church No" className={"order-detail"}>
              <Row>
                <Col span={10}>
                  <span className={"prev-value"}>
                    {selectedOrder?.churchNo}
                  </span>
                </Col>
                <Col span={10}>
                  <span>{selectedOrder?.churchNo}</span>
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item label="Order ID" className={"order-detail"}>
              <Row>
                <Col span={10}>
                  <span className={"prev-value"}>{selectedOrder?.orderID}</span>
                </Col>
                <Col span={10}>
                  <span>{selectedOrder?.orderID}</span>
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item label="Program Year" className={"order-detail"}>
              <Row>
                <Col span={10}>
                  <span className={"prev-value"}>
                    {selectedOrder?.programYear}
                  </span>
                </Col>
                <Col span={10}>
                  <span>{selectedOrder?.programYear}</span>
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item label="Status" className={"order-detail"}>
              <Row>
                <Col span={10}>
                  <Tag color={TagColor("disabled")}>
                    {selectedOrder?.status.toUpperCase()}
                  </Tag>
                </Col>
                <Col span={10}>
                  <Tag color={TagColor(selectedOrder?.status)}>
                    {selectedOrder?.status.toUpperCase()}
                  </Tag>{" "}
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item label="Date Placed" className={"order-detail"}>
              <Row>
                <Col span={10}>
                  <span className={"prev-value"}>
                    {selectedOrder?.datePlaced}
                  </span>
                </Col>
                <Col span={10}>
                  <span>{selectedOrder?.datePlaced}</span>
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item label="Create Date" className={"order-detail"}>
              <Row>
                <Col span={10}>
                  <span className={"prev-value"}>
                    {selectedOrder?.createDate}
                  </span>
                </Col>
                <Col span={10}>
                  <span>{selectedOrder?.createDate}</span>
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item
              label="Delivery Period"
              className={"order-detail"}
            >
              <Row>
                <Col span={10}>
                  <span className={"prev-value"}>
                    {selectedOrder?.deliveryPeriod}
                  </span>
                </Col>
                <Col span={10}>
                  <span>{selectedOrder?.deliveryPeriod}</span>
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item label="Ship To" className={"order-detail"}>
              <Row>
                <Col span={10}>
                  <span className={"prev-value"}>{selectedOrder?.shipTo}</span>
                </Col>
                <Col span={10}>
                  <span>{selectedOrder?.shipTo}</span>
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item
              label="Tracking Number"
              className={"order-detail"}
            >
              <Row>
                <Col span={10}>
                  <span className={"prev-value"}>
                    {selectedOrder?.trackingNumber}
                  </span>
                </Col>
                <Col span={10}>
                  <span>{selectedOrder?.trackingNumber}</span>
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item label="Placed By" className={"order-detail"}>
              <Row>
                <Col span={10}>
                  <span className={"prev-value"}>
                    {selectedOrder?.placedBy}
                  </span>
                </Col>
                <Col span={10}>
                  <span>{selectedOrder?.placedBy}</span>
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item
              label="TF Order Number"
              className={"order-detail"}
            >
              <Row>
                <Col span={10}>
                  <span className={"prev-value"}>
                    {selectedOrder?.tfOrderNumber}
                  </span>
                </Col>
                <Col span={10}>
                  <span>{selectedOrder?.tfOrderNumber}</span>
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item label="Fax Hard Copy" className={"order-detail"}>
              <Row>
                <Col span={10}>
                  <span className={"prev-value"}>
                    {selectedOrder?.faxHardCopy}
                  </span>
                </Col>
                <Col span={10}>
                  <span>{selectedOrder?.faxHardCopy}</span>
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item
              label="Do Not Contact Church"
              className={"order-detail"}
            >
              <Row>
                <Col span={10}>
                  <Checkbox
                    checked={selectedOrder?.doNotContactChurch}
                    disabled
                  />
                </Col>
                <Col span={10}>
                  <Checkbox
                    checked={selectedOrder?.doNotContactChurch}
                    disabled
                  />
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item label="Order Type" className={"order-detail"}>
              <Row>
                <Col span={10}>
                  <span className={"prev-value"}>
                    {selectedOrder?.orderType}
                  </span>
                </Col>
                <Col span={10}>
                  <span>{selectedOrder?.orderType}</span>
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item label="Self Sponsor" className={"order-detail"}>
              <Row>
                <Col span={10}>
                  <Checkbox checked={selectedOrder?.selfSponsor} disabled />
                </Col>
                <Col span={10}>
                  <Checkbox checked={selectedOrder?.selfSponsor} disabled />
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item label="Response Date" className={"order-detail"}>
              <Row>
                <Col span={10}>
                  <span className={"prev-value"}>
                    {selectedOrder?.responseDate}
                  </span>
                </Col>
                <Col span={10}>
                  <span>{selectedOrder?.responseDate}</span>
                </Col>
              </Row>
            </Descriptions.Item>
          </Descriptions>
        )}
      </CustomDrawer>
    </Fragment>
  );
};

export default AdminTable;
