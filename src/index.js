import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// here we are grabing the div with the ID of root and rendering it here and we are inserting out "app" in that div which we are importing
//which contains the root app component, its like the whole application we can have further components but root app componenet encapsulates all the other components
//for easier and best programming practices like our header, pannel, events will all be inside this app commponent
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
