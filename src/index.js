import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AnimatedCursor from "react-animated-cursor"

ReactDOM.render(
  <React.StrictMode>
    <AnimatedCursor

      innerSize={13}
      outerSize={18}
      // color='0, 146, 204'
      color='256, 256, 256'
      outerAlpha={0.4}
      innerScale={0.7}
      outerScale={3}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}

    />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
