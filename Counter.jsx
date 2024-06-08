import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  function incNum() {
    setCount(count + 1);
  }

  function decNum() {
    setCount(count - 1);
  }

  function oddNum() {
    if (count % 2 == 0) {
      setCount(count + 1);
    } else {
      setCount(count + 2);
    }
  }

  function resNum() {
    setCount(0);
  }

  return (
    <>
      <div id="counter-div">
        <h1>{count}</h1>
        <button onClick={incNum}>Click for +1</button>
        <button onClick={decNum}>Click for -1</button>
        <button onClick={oddNum}>Click for odd numbers</button>
        <button onClick={resNum}>Reset</button>
      </div>
    </>
  );
}
