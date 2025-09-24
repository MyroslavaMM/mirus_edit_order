import { useEffect, useState, type FC } from "react";
import "./index.less";
import { Button, Checkbox, Descriptions, Input, Row, Table, Tag } from "antd";
import { useParams } from "react-router-dom";
import { dataSource } from "../../data/orderData";
import { TagColor } from "../adminTable";
import { costsData } from "../../data/costsData";

const CustomerContent: FC = () => {
  const { id } = useParams();
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    setOrder(dataSource?.find((item) => item?.orderID === id));
  }, [id]);

  const columns = [
    {
      title: "Style",
      dataIndex: "style",
      key: "style",
      render: (_: any, record: any) => (
        <span style={{ fontWeight: 600 }}>{record.style}</span>
      ),
    },
    {
      title: "Price per Unit",
      dataIndex: "pricePerUnit",
      key: "pricePerUnit",
      render: (_: any, record: any) =>
        record.pricePerUnit ? <Input value={record.pricePerUnit} /> : null,
    },
    {
      title: "Units",
      dataIndex: "units",
      key: "units",
      render: (_: any, record: any) =>
        record.units ? <Input value={record.units} /> : null,
    },
    {
      title: "Extended Price",
      dataIndex: "extendedPrice",
      key: "extendedPrice",
      render: (_: any, record: any) =>
        record.extendedPrice ? <Input value={record.extendedPrice} /> : null,
    },
  ];

  return (
    <Row className={"customer-order-details"}>
      <Row className={"order-description-wrapper"}>
        <Descriptions
          rootClassName={"order-description"}
          column={1}
          bordered
          size="small"
        >
          <Descriptions.Item label="Church">
            <Input
              value={order?.church}
              onChange={(e) => setOrder({ ...order, church: e.target.value })}
            />
          </Descriptions.Item>
          <Descriptions.Item label="Church Contact">
            <Input
              value={order?.churchContact}
              onChange={(e) =>
                setOrder({ ...order, churchContact: e.target.value })
              }
            />
          </Descriptions.Item>
          <Descriptions.Item label="Church No">
            {
              <Input
                value={order?.churchNo}
                onChange={(e) =>
                  setOrder({ ...order, churchNo: e.target.value })
                }
              />
            }
          </Descriptions.Item>
          <Descriptions.Item label="Order ID">
            {order?.orderID}
          </Descriptions.Item>
          <Descriptions.Item label="Program Year">
            {
              <Input
                value={order?.programYear}
                onChange={(e) =>
                  setOrder({ ...order, programYear: e.target.value })
                }
              />
            }
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color={TagColor(order?.status ?? "")}>
              {order?.status?.toUpperCase()}
            </Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Date Placed">
            {
              <Input
                value={order?.datePlaced}
                onChange={(e) =>
                  setOrder({ ...order, datePlaced: e.target.value })
                }
              />
            }
          </Descriptions.Item>
          <Descriptions.Item label="Create Date">
            {order?.createDate}
          </Descriptions.Item>
          <Descriptions.Item label="Delivery Period">
            {
              <Input
                value={order?.deliveryPeriod}
                onChange={(e) =>
                  setOrder({ ...order, deliveryPeriod: e.target.value })
                }
              />
            }
          </Descriptions.Item>
          <Descriptions.Item label="Ship To">
            {
              <Input
                value={order?.shipTo}
                onChange={(e) => setOrder({ ...order, shipTo: e.target.value })}
              />
            }
          </Descriptions.Item>
          <Descriptions.Item label="Tracking Number">
            {order?.trackingNumber}
          </Descriptions.Item>
          <Descriptions.Item label="Placed By">
            {
              <Input
                value={order?.placedBy}
                onChange={(e) =>
                  setOrder({ ...order, placedBy: e.target.value })
                }
              />
            }
          </Descriptions.Item>
          <Descriptions.Item label="TF Order Number">
            {order?.tfOrderNumber}
          </Descriptions.Item>
          <Descriptions.Item label="Fax Hard Copy">
            {order?.faxHardCopy}
          </Descriptions.Item>
          <Descriptions.Item label="Do Not Contact Church">
            <Checkbox checked={order?.doNotContactChurch} />
          </Descriptions.Item>
          <Descriptions.Item label="Order Type">
            {order?.orderType}
          </Descriptions.Item>
          <Descriptions.Item label="Self Sponsor">
            <Checkbox checked={order?.selfSponsor} />
          </Descriptions.Item>
          <Descriptions.Item label="Response Date">
            {order?.responseDate}
          </Descriptions.Item>
        </Descriptions>
      </Row>
      <Row className={"order-calculation-table-wrapper"}>
        <Table
          rootClassName={"order-calculation-table"}
          pagination={false}
          bordered
          columns={columns}
          dataSource={costsData}
        ></Table>
      </Row>
      <Row className={"order-details-actions-btn"}>
        <Button>Save</Button>
        <Button color="danger" variant="outlined">
          Cancel
        </Button>
      </Row>
    </Row>
  );
};

export default CustomerContent;
