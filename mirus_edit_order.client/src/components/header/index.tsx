import type { FC } from "react";
import "./index.less";
import { Avatar, Input, Row, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

const Header: FC<{ headerTitle: string }> = ({ headerTitle }) => {
  return (
    <Row className={"header"}>
      <Paragraph className={"header-page-name"}>{headerTitle} </Paragraph>
      <Row className={"header-user-block"}>
        <Row>
          <Input.Search
            rootClassName={"header-search"}
            placeholder={"Search..."}
            enterButton={null}
            prefix={<SearchOutlined className={"search-icon"} />}
          />
        </Row>
        <Row>
          <Avatar>AD</Avatar>
        </Row>
      </Row>
    </Row>
  );
};

export default Header;
