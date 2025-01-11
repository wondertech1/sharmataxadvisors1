import React from "react";
import ReactDOM from "react-dom/client";
import AppBar from "./AppBar";
import Footer from "./Footer";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import Body1 from "./Body1";
import Body2 from "./Body2";
import Body3 from "./Body3";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppBar />
    <Body1 />
    <Body2 />
    <Body3 />
    <Footer />
  </React.StrictMode>
);
