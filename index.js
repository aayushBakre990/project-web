import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Test, { PrintName, name, printName } from "./Test";
import Table from "./Table";
// import Card from "./Card";
import Marquee from "./Marquee";
import Counter from "./Counter";
import Form from "./Form";
import Alert from "./Alert";
import Calculator from "./Calculator";
import ImageDblClick from "./ImageDblClick";
import VideoGallery from "./VideoGallery";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ReactDOM.render(
//   <div>
//     <h1>Hello World</h1>
//     <h2>Bye</h2>
//   </div>,

//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// ReactDOM.render(
//   <>
//     <h1>Hello</h1>
//     <img src="./images/event-1.jpg" height="200" width="200"/>
//     <hr />
//     <img src="./images/event-1.jpg" height="200" width="200" />
//   </>,

//   document.getElementById("root")
// );

// ReactDOM.render(
//   <>
//     <h1>Hello</h1>
//     <ul>
//       <li>Pizza</li>
//       <li>Pizza</li>
//       <li>Pizza</li>
//     </ul>
//   </>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <>
//     <NavBar></NavBar>
//     <Footer></Footer>
//   </>,
//   document.getElementById("root")
// );

//TABLE
// ReactDOM.render(
//   <>
//   <Table cellPad="30" cellSpace="0" styling={{textAlign: "center", backgroundColor: "rgb(240,240,240)"}}></Table>
//   </>,
//   document.getElementById("root")
// );

//IMAGE CARDS
// ReactDOM.render(
//   <>
//     <NavBar></NavBar>
//     <div className="cards">
//       <Card title="Interstellar" tag="Christopher Nolan" id="interstellar"></Card>
//       <Card title="The Dark Knight" tag="Christopher Nolan" id="tdk" crop="card-shift"></Card>
//       <Card title="Man Of Steel" tag="Zack Snyder" id="superman"></Card>
//     </div>
//   </>,
//   document.getElementById("root")
// );

//MARQUEE
// ReactDOM.render(
//   <>
//     <Marquee title="This is a marquee" dir="right" speed="10" styling={{backgroundColor: "rgb(255, 91, 91)", fontSize: "28px"}}></Marquee>
//     <Marquee title="This is a small marquee" dir="right" speed="100" styling={{backgroundColor: "rgb(158, 255, 120)"}}></Marquee>
//   </>,
//   document.getElementById("root")
// )

//COUNTER
// ReactDOM.render(
// <>
//   <Counter></Counter>
// </>, document.getElementById("root"));

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(<Hello />);

// ReactDOM.render(
//   <>
//     <Form />
//   </>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <>
//     <Alert />
//   </>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <>
//     <Counter />
//   </>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <>
//     <ImageDblClick src="./images/card/interstellar.gif" />
//   </>, 
//   document.getElementById("root")
// )

ReactDOM.render(
  <>
    <Calculator />
    {/* <ImageDblClick src="./images/card/interstellar.gif"/> */}
    {/* <VideoGallery /> */}
  </>, 
  document.getElementById("root")
)