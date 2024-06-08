import { useState } from "react";
import "./Card.css";

export default function Card(props) {
  const [gif, setGif] = useState(`./images/card/${props.id}Static.gif`);

  function gifEnter() {
    setGif(`./images/card/${props.id}.gif`);
  }

  function gifLeave() {
    setGif(`./images/card/${props.id}Static.gif`);
  }

  return (
    <>
      <div
        className="card-container"
        id={props.id}
        onMouseEnter={gifEnter}
        onMouseLeave={gifLeave}
      >
        <div className="img-container">
          <img src={gif} alt="" class={props.crop} />
        </div>
        <h1>{props.title}</h1>
        <h3>{props.tag}</h3>
        <button className="btn-trailer">▶</button>
      </div>
    </>
  );
}
