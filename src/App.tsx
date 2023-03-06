import React, { useState } from "react";
import "./App.css";
import CountUp from "react-countup";

function App() {
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(100);

  return (
    <React.Fragment>
      <h1>This is our counter app</h1>
      <CountUp
        duration={3.75}
        start={start}
        end={end}
        style={{ fontSize: "35px", fontWeight: "600", textAlign: "center" }}
      />
    </React.Fragment>
  );
}

export default App;
