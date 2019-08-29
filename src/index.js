import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { store, persistor } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const Bootstrap = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

ReactDOM.render(<Bootstrap />, document.getElementById("root"));
