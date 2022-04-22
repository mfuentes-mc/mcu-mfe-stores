
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import {StoresRouters} from './routers/StoresRouters';

const App = () => (
  <div>
    <BrowserRouter>
      <StoresRouters/>
    </BrowserRouter>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
    