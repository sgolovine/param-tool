import React from "react";
import buildURL from "build-url";
import styled from "styled-components";

function parseParams(params) {
  const dataKeys = Object.keys(params);
  let parsedParams = {};
  dataKeys.forEach(item => {
    const param = params[item];
    if (param.paramName && param.paramValue) {
      parsedParams = {
        ...parsedParams,
        [param.paramName]: param.paramValue
      };
    }
  });
  return parsedParams;
}

const UrlDisplay = ({ baseUrl, port, params }) => {
  const parsedParams = parseParams(params);
  const base = port ? `${baseUrl}:${port}` : baseUrl;
  console.log(Object.keys(parsedParams).length);
  const url = buildURL(base, {
    ...(Object.keys(parsedParams).length && { queryParams: parsedParams })
  });
  return (
    <>
      <Link href={url} target="_blank">
        NAVIGATE
      </Link>
      <br />
      <textfield>{url}</textfield>
    </>
  );
};

export default UrlDisplay;

const Link = styled.a`
  font-size: 18px;
`;
