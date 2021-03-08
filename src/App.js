import React, { useState, useEffect, useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./Login";
import Todos from "./Todos";
import { AppContext } from "./context";

function App() {
  const { login } = useContext(AppContext);

  return <div>{login ? <Todos /> : <Login />}</div>;
}

export default App;
