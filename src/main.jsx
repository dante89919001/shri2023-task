import { render } from "preact";
import { Fragment } from "preact";

import App from "./App.jsx";
import Header from "./Header.jsx";

import "./styles.css";

render(
    <Fragment>
      <Header />
      <App />
    </Fragment>,
    document.getElementById("root")
  );
  