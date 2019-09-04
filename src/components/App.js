import React, { useState } from "react";
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
import { AddressBar } from "./Components";
import ConnectedInput from "./ConnectedInput";

function App(props) {
  const [url, setUrl] = useState("");
  const [port, setPort] = useState("");

  const renderParams = () => {
    console.log(props, props.params);
    const { params } = props;
    const paramKeys = Object.keys(params) || [];
    if (paramKeys.length === 0) return <p>No Params Yet</p>;
    return paramKeys.map(key => {
      return <ConnectedInput guid={key} />;
    });
  };

  return (
    <Container>
      <AddressBar url={url} port={port} onUrl={setUrl} onPort={setPort} />
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
