import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
import "./styles/style.scss";

const API_KEY = "AIzaSyBv1Y8TY4PwVOT7FIkZvTrwTk0Zqdv1KdI"
const ROOT = document.querySelector(".container");

ReactDOM.render(<App name="Tony">Hello</App>, ROOT);