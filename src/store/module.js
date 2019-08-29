import omit from "ramda/src/omit";

export const initialState = {
  baseURL: "",
  port: "",
  params: {}
};

export const setBaseUrl = url => {
  return {
    type: "SET_BASE_URL",
    payload: url
  };
};

export const setPort = port => {
  return {
    type: "SET_PORT",
    payload: port
  };
};

export const addParam = ({ guid, paramName, paramValue }) => {
  return {
    type: "SET_PARAM",
    payload: { guid, paramName, paramValue }
  };
};

export const removeParam = ({ guid }) => {
  return {
    type: "REMOVE_PARAM",
    payload: guid
  };
};

export const editParamName = ({ guid, newName }) => {
  return {
    type: "EDIT_PARAM_NAME",
    payload: { guid, newName }
  };
};

export const editParamValue = ({ guid, newValue }) => {
  return {
    type: "EDIT_PARAM_VALUE",
    payload: { guid, newValue }
  };
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "SET_BASE_URL":
      return {
        ...state,
        baseURL: action.payload
      };
    case "SET_PORT":
      return {
        ...state,
        port: action.payload
      };
    case "SET_PARAM":
      return {
        ...state,
        params: {
          ...state.params,
          [action.payload.guid]: {
            key: action.payload.paramName,
            value: action.payload.paramValue
          }
        }
      };
    case "REMOVE_PARAM":
      return omit([action.payload], state);
    case "EDIT_PARAM_NAME":
      return {
        ...state,
        params: {
          ...state.params,
          [action.payload.guid]: {
            ...state.params[action.payload.guid],
            paramName: action.payload.newName
          }
        }
      };
    case "EDIT_PARAM_VALUE":
      return {
        ...state,
        params: {
          ...state.params,
          [action.payload.guid]: {
            ...state.params[action.payload.guid],
            paramValue: action.payload.newValue
          }
        }
      };
    default:
      return state;
  }
}

export const getBaseURL = state => state.baseURL;
export const getPort = state => state.port;
export const getParams = state => state.params;
export const getParam = (state, guid) => state.params[guid];
