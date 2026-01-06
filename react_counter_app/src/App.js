import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    return () => {
      console.log("clean up");
    };
  }, [counter]);

  const inc = () => {
    setCounter(counter + 1);
  };

  const dec = () => {
    if (counter <= 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Simple React Counter App </h3>
      </header>

      <div className="container">
        <h3>count: {counter}</h3>
        <button onClick={inc}> Increment </button>
        <button onClick={dec}> Decrement </button>
      </div>
    </div>
  );
}

export default App;
