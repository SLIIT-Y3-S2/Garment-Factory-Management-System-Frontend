import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AddStock from "./components/AddStock";
import ViewStock from "./components/ViewStock";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stocksIn" element={<AddStock />} />
          <Route path="/viewStocks" element={<ViewStock />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
