import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage";
import Trasnsaction from "./components/Transaction";
import TransactionData from "./components/TransactionData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/transaction",
    element: <Trasnsaction></Trasnsaction>,
  },
  {
    path: "/data",
    element: <TransactionData></TransactionData>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
