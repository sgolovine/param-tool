import React from "react";
import { Input, FlexContainer } from "./Styled";

const AddressBar = ({ url, onUrl }) => (
  <FlexContainer>
    <Input
      value={url}
      onChange={e => onUrl(e.target.value)}
      placeholder="address"
    />
  </FlexContainer>
);

export default AddressBar;
