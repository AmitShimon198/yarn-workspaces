import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Blabla } from "server-1";
import { Bla2 } from "server-2/util/util";
function App() {
  const [data, setData] = useState<Blabla>({ foo: "" });
  const [data2, setData2] = useState<Bla2>({ foo2: "" });
  useEffect(() => {
    fetch("http://localhost:3798/data")
      .then((da) => da.json())
      .then((da) => {
        setData(da);
      });
    fetch("http://localhost:7071/api/firstFunc?name=amit")
      .then((da) => da.json())
      .then((da) => {
        setData2(da);
      });
  }, []);
  return (
    <div className="App">
      {JSON.stringify(data)}
      {JSON.stringify(data2)}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
