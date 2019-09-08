import React from "react";
import styled from "styled-components";
import { Input, FlexContainer } from "./Styled";

const AddressBar = ({ url, port, onUrl, onPort }) => (
  <FlexContainer>
    <AddressInput
      value={url}
      onChange={e => onUrl(e.target.value)}
      placeholder="address"
    />
    <PortInput
      value={port}
      onChange={e => onPort(e.target.value)}
      placeholder="port"
    />
  </FlexContainer>
);

export default AddressBar;

const AddressInput = styled(Input)`
  width: 75%;
`;

const PortInput = styled(Input)`
  width: 25%;
`;
