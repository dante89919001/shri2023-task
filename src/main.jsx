import { render } from "preact";

import App from "./App.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import "./styles.css";

render(
  <>
    <Header />
    <App />
  </>,
  document.getElementById("root")
);