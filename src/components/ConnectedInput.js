import React from "react";
import PropTypes from "prop-types";
import { InputBar } from "./Components";
import { connect } from "react-redux";
import {
  getParam,
  editParamName,
  editParamValue,
  removeParam
} from "../store/module";

const ConnectedInput = props => {
  const { guid, param } = props;
  const { paramName, paramValue } = param;
  console.log(param);

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

ConnectedInput.propTypes = {
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
)(ConnectedInput);
