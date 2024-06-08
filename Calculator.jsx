import { useEffect, useState } from "react";
import "./Exam.css";

export default function Calculator() {
  const [numDisplay, setNumDisplay] = useState(0);

  const [num, setNum] = useState(0);

  const [expDisplay, setExpDisplay] = useState("");

  const [exp, setExp] = useState("Answer");

  const [initial, setInitial] = useState(true);

  function numButton(event) {
    if (expDisplay != "" && numDisplay < 1) {
      setNumDisplay(event.target.innerHTML);
    } else {
      if (numDisplay != 0) {
        setNumDisplay(numDisplay * 10 + +event.target.innerHTML);
      } else {
        setNumDisplay(event.target.innerHTML);
      }
    }
  }

  function calcSign(event) {
    setInitial(false);
    if (
      expDisplay == "" &&
      numDisplay == 0 &&
      (event.target.innerHTML == "*" || event.target.innerHTML == "/")
    ) {
      setExpDisplay(expDisplay + event.target.innerHTML);
    } else {
      if (
        eval(expDisplay + numDisplay) &&
        eval(expDisplay + numDisplay) != "Infinity"
      ) {
        setExpDisplay(
          Math.trunc(eval(expDisplay + numDisplay)) + event.target.innerHTML
        );
        setNumDisplay(0);
      }
    }
  }

  function equalSign() {
    setInitial(false);
    if (
      Math.trunc(eval(expDisplay + numDisplay)) != "Infinity" &&
      Math.trunc(eval(expDisplay + numDisplay))
    ) {
      setExpDisplay(Math.trunc(eval(expDisplay + numDisplay)));
    }
    setNumDisplay(0);
  }

  function clearCal() {
    setNumDisplay(0);
    setExpDisplay("");
    setInitial(true);
    setExp("Answer");
  }

  useEffect(() => {
    if (!initial) {
      setExp(expDisplay);
    }
  }, [expDisplay]);

  return (
    <>
      <div id="calculator">
        <div id="screen">
          <p id="expression">
            <span>{exp}</span>
          </p>
          <p id="number">{numDisplay}</p>
        </div>

        <div className="button-row">
          <button onClick={numButton}>7</button>
          <button onClick={numButton}>8</button>
          <button onClick={numButton}>9</button>
          <button onClick={calcSign}>+</button>
        </div>
        <div className="button-row">
          <button onClick={numButton}>4</button>
          <button onClick={numButton}>5</button>
          <button onClick={numButton}>6</button>
          <button onClick={calcSign}>-</button>
        </div>
        <div className="button-row">
          <button onClick={numButton}>1</button>
          <button onClick={numButton}>2</button>
          <button onClick={numButton}>3</button>
          <button onClick={calcSign}>*</button>
        </div>

        <div className="button-row">
          <button onClick={clearCal}>Clear</button>
          <button onClick={numButton}>0</button>
          <button onClick={calcSign}>/</button>
          <button onClick={equalSign}>=</button>
        </div>
      </div>
    </>
  );
}
