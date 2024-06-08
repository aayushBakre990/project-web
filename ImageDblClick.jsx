import { useState } from "react";
import "./Exam.css";

export default function ImageDblClick(props) {
  const [imgClass, setImgClass] = useState("dbl-img");

  const [up, setUp] = useState("btn-up");

  function showImg() {
    // if(imgSrc == "") {
    //     setImgSrc(props.src);
    // } else {
    //     setImgSrc("");
    // }
    if (imgClass == "dbl-img") {
      setImgClass("clk-img");
      setUp("btn-down");
    } else {
      setImgClass("dbl-img");
      setUp("btn-up");
    }
  }

  return (
    <>
    <div id="dbl-img-container">
      <img src={props.src} className={imgClass} />
      <button onDoubleClick={showImg} id="dbl-clk-btn" className={up}>
        Double click me
      </button>
    </div>
    </>
  );
}
