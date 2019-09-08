import React from "react";
import { connect } from "react-redux";
import {
  getBaseURL,
  getPort,
  getParams,
  setBaseUrl,
  setPort,
  addParam,
  removeParam,
  editParamName,
  editParamValue
} from "../store/module";
import { Container } from "./Styled";
import AddressBar from "./AddressBar";
import ParamaterInput from "./ParamaterInput";
import UrlDisplay from "./UrlDisplay";

function App(props) {
  const renderParams = () => {
    const { params } = props;
    const paramKeys = Object.keys(params) || [];
    if (paramKeys.length === 0) return <p>No Params Yet</p>;
    return paramKeys.map(key => {
      return <ParamaterInput guid={key} />;
    });
  };

  return (
    <Container>
      <UrlDisplay
        baseUrl={props.baseURL}
        port={props.port}
        params={props.params}
      />
      <AddressBar
        url={props.baseURL}
        port={props.port}
        onUrl={props.setBaseUrl}
        onPort={props.setPort}
      />
      {renderParams()}
      <button onClick={props.addParam}>Add Field</button>
    </Container>
  );
}

const mapStateToProps = state => ({
  baseURL: getBaseURL(state),
  port: getPort(state),
  params: getParams(state)
});

const mapDispatchToProps = {
  setBaseUrl,
  setPort,
  addParam,
  removeParam,
  editParamName,
  editParamValue
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
