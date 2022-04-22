
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import {StoresRouters} from './routers/StoresRouters';

const App = () => (
  <div>
    <StoresRouters/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
    