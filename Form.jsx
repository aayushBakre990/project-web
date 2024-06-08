import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");

  const [fullName, setfullName] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeMiddleName = (event) => {
    setMiddleName(event.target.value);
  };

  const changeLastName = (event) => {
    setLastName(event.target.value);
  };

  const displayName = () => {
    setfullName(" " + name + " " + middleName + " " + lastName);
    setName("");
    setMiddleName("");
    setLastName("");
  };

  return (
    <>
      <div id="form-div">
        <h1>Hello{fullName}!</h1>
        <div id="input-container">
          <input
            type="text"
            placeholder="Enter First Name"
            onChange={changeName}
            value={name}
          />
          <input
            type="text"
            placeholder="Enter Middle Name"
            onChange={changeMiddleName}
            value={middleName}
          />
          <input
            type="text"
            placeholder="Enter Last Name"
            onChange={changeLastName}
            value={lastName}
          />
        </div>
        <button onClick={displayName}>Click me</button>
      </div>
    </>
  );
};

export default Form;
