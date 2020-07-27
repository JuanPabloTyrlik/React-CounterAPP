import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import CounterApp from "./components/CounterApp";
import PrimeraApp from "./components/PrimeraApp";

const divRoot = document.querySelector("#root");

ReactDOM.render(<PrimeraApp saludo='Hola, Soy Goku' />, divRoot);
// ReactDOM.render(<CounterApp value={10} />, divRoot);
