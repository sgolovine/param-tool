import React from "react";
import { Input, FlexContainer } from "./Styled";
import styled from "styled-components";

export const InputBar = ({
  leftVal,
  rightVal,
  onLeftChange,
  onRightChange,
  onDelete
}) => (
  <FlexContainer>
    <Input
      placeholder="key"
      value={leftVal}
      onChange={e => onLeftChange(e.target.value)}
    />
    <Input
      placeholder="value"
      value={rightVal}
      onChange={e => onRightChange(e.target.value)}
    />
    <button onClick={onDelete}>DELETE</button>
  </FlexContainer>
);

export const AddressBar = ({ url, port, onUrl, onPort }) => (
  <FlexContainer>
    <AddressInput
      value={url}
      onChange={e => onUrl(e.target.value)}
      placeholder="Address (localhost:3000)"
    />
    <PortInput
      value={port}
      onChange={e => onPort(e.target.value)}
      placeholder="port (optional)"
    />
  </FlexContainer>
);

const AddressInput = styled(Input)`
  width: 75%;
`;

const PortInput = styled(Input)`
  width: 25%;
`;
