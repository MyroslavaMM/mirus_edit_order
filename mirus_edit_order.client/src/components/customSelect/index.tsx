import type { FC } from "react";
import "./index.less";
import { Select, type SelectProps } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

const CustomSelect: FC<SelectProps> = ({ ...props }) => {
  return (
    <Select
      suffixIcon={<CaretDownOutlined />}
      rootClassName={"custom-select"}
      {...props}
    />
  );
};

export default CustomSelect;
