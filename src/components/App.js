import React, { useState } from "react";
import { Container } from "./Styled";
import { InputBar, AddressBar } from "./Components";

function App() {
  const [leftVal, setLeftVal] = useState("");
  const [rightVal, setRightVal] = useState("");
  const [url, setUrl] = useState("");
  const [port, setPort] = useState("");
  return (
    <Container>
      <AddressBar url={url} port={port} onUrl={setUrl} onPort={setPort} />
      <InputBar
        leftVal={leftVal}
        rightVal={rightVal}
        onLeftChange={setLeftVal}
        onRightChange={setRightVal}
      />
      <button>Add Field</button>
    </Container>
  );
}

export default App;
