import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Buyers from "./components/Buyers";
import FormerBuyers from "./components/FormerBuyers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buyer" element={<Buyers />} />
          <Route path="/formerbuyer" element={<FormerBuyers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
