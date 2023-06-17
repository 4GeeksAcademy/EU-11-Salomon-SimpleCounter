//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Card from './component/card.jsx'

// include your styles into the webpack bundle
import "../styles/index.css";

// //import your own components
// import Home from "./component/home.jsx";

// //render your react application
// ReactDOM.render(<Home />, document.querySelector("#app"));
//import react into the bundle
let secondsPassed = 0;
setInterval(() => {
    secondsPassed++;
    ReactDOM.render(<Card seconds={secondsPassed} />, document.querySelector("#app"));
}, 1000);