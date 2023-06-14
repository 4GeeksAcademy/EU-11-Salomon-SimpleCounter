//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle

//import your own components
import { Counter } from "./component/counter.jsx";

//render your react application
function renderCounter() {
ReactDOM.render(<Counter count={counter}  />, document.querySelector("#app") 
)
counter++;
}
setInterval(renderCounter, 1000);
