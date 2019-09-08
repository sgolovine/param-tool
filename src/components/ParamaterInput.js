import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FlexContainer, Input } from "./Styled";
import {
  getParam,
  editParamName,
  editParamValue,
  removeParam
} from "../store/module";

const InputBar = ({
  leftVal,
  rightVal,
  onLeftChange,
  onRightChange,
  onDelete
}) => {
  console.log(leftVal, rightVal);
  return (
    <FlexContainer>
      <Input
        placeholder="key"
        value={leftVal}
        onChange={e => onLeftChange(e.target.value)}
        defaultValue={leftVal}
      />
      <Input
        placeholder="value"
        value={rightVal}
        onChange={e => onRightChange(e.target.value)}
        defaultValue={rightVal}
      />
      <button onClick={onDelete}>DELETE</button>
    </FlexContainer>
  );
};

const ParamaterInput = props => {
  const { guid, param } = props;
  const { paramName, paramValue } = param;

  const editName = newName => props.onNameChange({ guid, newName });
  const editValue = newValue => props.onValueChange({ guid, newValue });
  const deleteField = () => props.removeParam(guid);

  return (
    <InputBar
      leftVal={paramName}
      rightVal={paramValue}
      onLeftChange={editName}
      onRightChange={editValue}
      onDelete={deleteField}
    />
  );
};

ParamaterInput.propTypes = {
  guid: PropTypes.string.isRequired,
  param: PropTypes.shape({
    paramName: PropTypes.string.isRequired,
    paramValue: PropTypes.string.isRequired
  }).isRequired,
  onNameChange: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  param: getParam(state, ownProps.guid)
});

const mapDispatchToProps = {
  onNameChange: editParamName,
  onValueChange: editParamValue,
  removeParam
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParamaterInput);
