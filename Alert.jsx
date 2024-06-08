import React, { useEffect, useState } from "react";
import ChatTitle from "./ChatTitle";

export default function Alert() {
  const [name, setName] = useState("");

  const [fullName, setfullName] = useState("");

  const [del, setDel] = useState(false);

  const [count, setCount] = useState(0);

  const changeName = (event) => {
    setName(event.target.value);
  };

  const displayName = () => {
    if (name != "") {
      setfullName(" " + name);
      setName("");
    }
  };

  const delName = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      setDel(true);
    } else {
      setDel(false);
    }
  };

  useEffect(() => {
    if (del) {
      setfullName("");
      setName("");
      setDel(false);
    }
  }, [del]);

  ChatTitle(count);

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
        </div>
        <button onClick={displayName}>Click me</button>
        <button onClick={delName}>Delete Name</button>
        <button onClick={() => {setCount(count + 1)}}>Message</button>
      </div>
    </>
  );
}
