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
  Select,
} from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { dataSource } from "../../data/orderData";
import { CaretDownOutlined } from "@ant-design/icons";

const styleOptions = [
  {
    label: "Places of Pilgrimage English",
    value: "Places of Pilgrimage English",
  },
  { label: "Option 2", value: "Option 2" },
];

const CustomerContent: FC = () => {
  const { id } = useParams();
  const [order, setOrder] = useState<any>(null);
  const navigate = useNavigate();
  const [form] = Form.useForm();

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

  return (
    <Form form={form} onFinish={onFinish}>
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
                    <Input
                      className={"editable-input"}
                      value={order?.church}
                      onChange={(e) =>
                        setOrder({ ...order, church: e.target.value })
                      }
                    />
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
                    <Input
                      className={"editable-input"}
                      value={order?.churchNo}
                      onChange={(e) =>
                        setOrder({ ...order, churchNo: e.target.value })
                      }
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item label="Sponsor">
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
                    <Input
                      className={"editable-input"}
                      value={order?.sponsor}
                      onChange={(e) =>
                        setOrder({ ...order, sponsor: e.target.value })
                      }
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item label="Sponsor No">
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
                    <Input
                      className={"editable-input"}
                      value={order?.sponsorNo}
                      onChange={(e) =>
                        setOrder({ ...order, sponsorNo: e.target.value })
                      }
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Descriptions.Item>
          </Descriptions>
        </Row>
        <Row className={"order-calculation-table-wrapper"}>
          <Descriptions
            rootClassName={"order-description"}
            column={1}
            bordered
            size="small"
          >
            <Descriptions.Item label="Allocation">
              <Row className={"desctiption-item-content"}>
                <Col span={9}>
                  <Input
                    value={order?.allocation}
                    disabled
                    rootClassName={"prev-content-input"}
                  />
                </Col>
                <Col span={14}>
                  <Form.Item name={"allocation"}>
                    <Input
                      className={"editable-input"}
                      value={order?.allocation}
                      onChange={(e) =>
                        setOrder({ ...order, allocation: e.target.value })
                      }
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item label="Tax Exempt">
              <Row className={"desctiption-item-content"}>
                <Col span={9}>
                  <Checkbox checked={order?.taxExempt} disabled />
                </Col>
                <Col span={14}>
                  <Form.Item name={"taxExempt"}>
                    <Checkbox checked={order?.taxExempt} />
                  </Form.Item>
                </Col>
              </Row>
            </Descriptions.Item>
            <Descriptions.Item label="Style">
              <Row className={"desctiption-item-content"}>
                <Col span={9}>
                  <Input
                    value={order?.style}
                    disabled
                    rootClassName={"prev-content-input"}
                  />
                </Col>
                <Col span={14}>
                  <Form.Item name="style" noStyle>
                    <Select
                      options={styleOptions}
                      suffixIcon={<CaretDownOutlined />}
                    />
                  </Form.Item>{" "}
                </Col>
              </Row>
            </Descriptions.Item>
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
        <Row className={"order-details-actions-btn"}>
          <Button onClick={() => handleSave()}>Save</Button>
          <Button color="danger" variant="outlined">
            Cancel
          </Button>
        </Row>
      </Row>
    </Form>
  );
};

export default CustomerContent;
