import React from "react";
import ReactDOM from "react-dom/client";
import AppBar from "./AppBar";
import Footer from "./Footer";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppBar />
    <Footer />
  </React.StrictMode>
);
