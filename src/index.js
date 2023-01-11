import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const firebaseConfig = {
  apiKey: "AIzaSyDuHiFoUMZyoQrx-c-voy6GRQ2qttgRNko",
  authDomain: "react-ch-2938f.firebaseapp.com",
  projectId: "react-ch-2938f",
  storageBucket: "react-ch-2938f.appspot.com",
  messagingSenderId: "341258740572",
  appId: "1:341258740572:web:d527d9fd236689c7a11799",
  measurementId: "G-8TB94F6MW6",
};

initializeApp(firebaseConfig);

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
