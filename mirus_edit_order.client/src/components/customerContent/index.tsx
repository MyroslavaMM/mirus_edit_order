import { useEffect, useState, type FC } from "react";
import "./index.less";
import {
  Button,
  Checkbox,
  Col,
  Descriptions,
  Input,
  Row,
  Form,
  Collapse,
  Table,
} from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { dataSource } from "../../data/orderData";
import CustomSelect from "../customSelect";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const CustomerContent: FC = () => {
  const { id } = useParams();
  const [order, setOrder] = useState<any>(null);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [activeKeys, setActiveKeys] = useState<string[]>([]);
  const [expande, setExpande] = useState<boolean>(false);

  useEffect(() => {
    setOrder(dataSource?.find((item) => item?.orderID === id));
  }, [id]);

  useEffect(() => {
    const order = dataSource?.find((item) => item?.orderID === id);
    if (order) {
      form.setFieldsValue(order);
    }
  }, [id, form]);

  const onFinish = (values: any) => {
    console.log("✅ Updated order:", values);
  };

  const handleSave = () => {
    navigate("/admin");
  };

  console.log(form.getFieldsValue());

  const expandColumns = [
    { title: "Field", dataIndex: "label", key: "label", width: "15%" },
    { title: "value", dataIndex: "value", key: "value", width: "40%" },
    {
      title: "value2",
      dataIndex: "value2",
      key: "value2",
      width: "40%",
    },
  ];

  const expandDataSource = [
    {
      key: "allocation",
      label: "Allocation",
      value: (
        <Input
          value={order?.allocation}
          disabled
          rootClassName={"prev-content-input"}
        />
      ),
      value2: <Input value={order?.allocation} className={"editable-input"} />,
    },
    {
      key: "sponsorNo",
      label: "Sponsor No",
      value: (
        <Input
          value={order?.sponsorNo}
          disabled
          rootClassName={"prev-content-input"}
        />
      ),
      value2: <Input value={order?.sponsorNo} className={"editable-input"} />,
    },
    {
      key: "taxExempt",
      label: "Tax Exempt",
      value: <Checkbox checked={order?.taxExempt} />,
      value2: <Checkbox checked={order?.taxExempt} />,
    },
  ];

  console.log(activeKeys);

  return (
    <Form rootClassName={"change-order-form"} form={form} onFinish={onFinish}>
      <Row className={"order-details-actions-btn"}>
        <Button onClick={() => handleSave()}>Save</Button>
        <Button color="danger" variant="outlined">
          Cancel
        </Button>
      </Row>
      <Row className={"customer-order-details"}>
        <Row className={"order-description-wrapper"}>
          <Descriptions
            rootClassName={"order-description"}
            column={1}
            bordered
            size="small"
          >
            <Descriptions.Item label="Order ID">
              {order?.orderID}
            </Descriptions.Item>
            <Descriptions.Item label="Self Sponsor">
              <Row className={"desctiption-item-content"}>
                <Col span={9}>
                  <Checkbox checked={order?.selfSponsor} disabled />
                </Col>
                <Col span={14}>
                  <Form.Item name={"seldSponsor"}>
                    <Checkbox checked={order?.selfSponsor} />
                  </Form.Item>
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item label="Church">
              <Row className={"desctiption-item-content"}>
                <Col span={9}>
                  <Input
                    value={order?.church}
                    disabled
                    rootClassName={"prev-content-input"}
                  />
                </Col>
                <Col span={14}>
                  <Form.Item name={"church"}>
                    <CustomSelect showSearch value={order?.church} />
                  </Form.Item>
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item label="Church No">
              <Row className={"desctiption-item-content"}>
                <Col span={9}>
                  <Input
                    value={order?.churchNo}
                    disabled
                    rootClassName={"prev-content-input"}
                  />
                </Col>
                <Col span={14}>
                  <Form.Item name={"churchNo"}>
                    <CustomSelect showSearch value={order?.churchNo} />
                  </Form.Item>
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item
              label={
                <Button
                  rootClassName={"expande-table-btn"}
                  iconPosition={"end"}
                  onClick={() => setExpande(!expande)}
                  icon={expande ? <UpOutlined /> : <DownOutlined />}
                >
                  Sponsor
                </Button>
              }
            >
              <Row className={"desctiption-item-content"}>
                <Col span={9}>
                  <Input
                    value={order?.sponsor}
                    disabled
                    rootClassName={"prev-content-input"}
                  />
                </Col>
                <Col span={14}>
                  <Form.Item name={"sponsor"}>
                    <CustomSelect showSearch value={order?.sponsor} />
                  </Form.Item>
                </Col>
              </Row>
              {/* <Collapse
                activeKey={activeKeys}
                onChange={(keys) => setActiveKeys(keys as string[])}
                ghost
              >
                <Collapse.Panel
                  header={
                    activeKeys.includes("1") ? "Hide details" : "Show details"
                  }
                  key="1"
                > */}
              {expande && (
                <Table
                  rootClassName={"sponsor-details-table"}
                  columns={expandColumns}
                  dataSource={expandDataSource}
                  pagination={false}
                  showHeader={false}
                  bordered
                />
              )}
              {/* </Collapse.Panel>
              </Collapse> */}
            </Descriptions.Item>
            {/* <Descriptions.Item label="Sponsor No">
              <Row className={"desctiption-item-content"}>
                <Col span={9}>
                  <Input
                    value={order?.sponsorNo}
                    disabled
                    rootClassName={"prev-content-input"}
                  />
                </Col>
                <Col span={14}>
                  <Form.Item name={"sponsorNo"}>
                    <CustomSelect showSearch value={order?.sponsorNo} />
                  </Form.Item>
                </Col>
              </Row>
            </Descriptions.Item> */}
          </Descriptions>
        </Row>
        <Row className={"order-calculation-table-wrapper"}>
          <Descriptions
            rootClassName={"order-description"}
            column={1}
            bordered
            size="small"
          >
            <Descriptions.Item label="Price">
              <Row className={"desctiption-item-content"}>
                <Col span={9}>
                  <Input
                    value={order?.price}
                    disabled
                    rootClassName={"prev-content-input"}
                  />
                </Col>
                <Col span={14}>
                  <Form.Item name={"price"}>
                    <Input
                      className={"editable-input"}
                      value={order?.price}
                      onChange={(e) =>
                        setOrder({ ...order, price: e.target.value })
                      }
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item label="Quantity">
              <Row className={"desctiption-item-content"}>
                <Col span={9}>
                  <Input
                    value={order?.quantity}
                    disabled
                    rootClassName={"prev-content-input"}
                  />
                </Col>
                <Col span={14}>
                  <Form.Item name={"quantity"}>
                    <Input
                      className={"editable-input"}
                      value={order?.quantity}
                      onChange={(e) =>
                        setOrder({ ...order, quantity: e.target.value })
                      }
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item label="Discount">
              <Row className={"desctiption-item-content"}>
                <Col span={9}>
                  <Input
                    value={order?.discount}
                    disabled
                    rootClassName={"prev-content-input"}
                  />
                </Col>
                <Col span={14}>
                  <Form.Item name={"discount"}>
                    <Input
                      className={"editable-input"}
                      value={order?.discount}
                      onChange={(e) =>
                        setOrder({ ...order, discount: e.target.value })
                      }
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Descriptions.Item>
          </Descriptions>
        </Row>
      </Row>
    </Form>
  );
};

export default CustomerContent;
