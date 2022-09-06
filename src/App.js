import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AddStock from "./components/AddStock";
import ViewStock from "./components/ViewStock";
import EditStockModal from "./components/EditStockModal";
import AppDeleteModal from "./components/AppDeleteModal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stocksIn" element={<AddStock />} />
          <Route path="/viewStocks" element={<ViewStock />} />
          <Route path="/editStocks" element={<EditStockModal />} />
          <Route path="/deleteStocks" element={<AppDeleteModal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
