import { useEffect, useState, type FC } from "react";
import "./index.less";
import { Button, Checkbox, Col, Descriptions, Input, Row } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { customerContentData } from "../../data/customerContentData";

const CustomerContent: FC = () => {
  const { id } = useParams();
  const [order, setOrder] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setOrder(customerContentData?.find((item) => item?.orderID === id));
  }, [id]);

  const handleSave = () => {
    navigate("/admin");
  };

  return (
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
                <Checkbox checked={order?.selfSponsor} />
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
                <Input
                  className={"editable-input"}
                  value={order?.church}
                  onChange={(e) =>
                    setOrder({ ...order, church: e.target.value })
                  }
                />
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
                <Input
                  className={"editable-input"}
                  value={order?.churchNo}
                  onChange={(e) =>
                    setOrder({ ...order, churchNo: e.target.value })
                  }
                />
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
                <Input
                  className={"editable-input"}
                  value={order?.sponsor}
                  onChange={(e) =>
                    setOrder({ ...order, sponsor: e.target.value })
                  }
                />
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
                <Input
                  className={"editable-input"}
                  value={order?.sponsorNo}
                  onChange={(e) =>
                    setOrder({ ...order, sponsorNo: e.target.value })
                  }
                />
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
                  value={order?.church}
                  disabled
                  rootClassName={"prev-content-input"}
                />
              </Col>
              <Col span={14}>
                <Input
                  className={"editable-input"}
                  value={order?.church}
                  onChange={(e) =>
                    setOrder({ ...order, church: e.target.value })
                  }
                />
              </Col>
            </Row>{" "}
          </Descriptions.Item>
          <Descriptions.Item label="Tax Exempt">
            <Row className={"desctiption-item-content"}>
              <Col span={9}>
                <Checkbox checked={order?.selfSponsor} disabled />
              </Col>
              <Col span={14}>
                <Checkbox checked={order?.selfSponsor} />
              </Col>
            </Row>
          </Descriptions.Item>
          <Descriptions.Item label="Style">
            <Row className={"desctiption-item-content"}>
              <Col span={9}>
                <Input
                  value={order?.church}
                  disabled
                  rootClassName={"prev-content-input"}
                />
              </Col>
              <Col span={14}>
                <Input
                  className={"editable-input"}
                  value={order?.church}
                  onChange={(e) =>
                    setOrder({ ...order, church: e.target.value })
                  }
                />
              </Col>
            </Row>
          </Descriptions.Item>
          <Descriptions.Item label="Price">
            <Row className={"desctiption-item-content"}>
              <Col span={9}>
                <Input
                  value={order?.churchNo}
                  disabled
                  rootClassName={"prev-content-input"}
                />
              </Col>
              <Col span={14}>
                <Input
                  className={"editable-input"}
                  value={order?.churchNo}
                  onChange={(e) =>
                    setOrder({ ...order, churchNo: e.target.value })
                  }
                />
              </Col>
            </Row>
          </Descriptions.Item>
          <Descriptions.Item label="Quantity">
            <Row className={"desctiption-item-content"}>
              <Col span={9}>
                <Input
                  value={order?.sponsor}
                  disabled
                  rootClassName={"prev-content-input"}
                />
              </Col>
              <Col span={14}>
                <Input
                  className={"editable-input"}
                  value={order?.sponsor}
                  onChange={(e) =>
                    setOrder({ ...order, sponsor: e.target.value })
                  }
                />
              </Col>
            </Row>
          </Descriptions.Item>
          <Descriptions.Item label="Discount">
            <Row className={"desctiption-item-content"}>
              <Col span={9}>
                <Input
                  value={order?.sponsorNo}
                  disabled
                  rootClassName={"prev-content-input"}
                />
              </Col>
              <Col span={14}>
                <Input
                  className={"editable-input"}
                  value={order?.sponsorNo}
                  onChange={(e) =>
                    setOrder({ ...order, sponsorNo: e.target.value })
                  }
                />
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
  );
};

export default CustomerContent;
