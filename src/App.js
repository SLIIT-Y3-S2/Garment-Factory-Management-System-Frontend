import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

import SuppliersTable from "./components/SuppliersTable";
import Supplier from "./components/Suppliers";
import SupplierForm from "./components/SupplierForm";
import FormerSuppliersTable from "./components/FormerSuppliers";
import SupplyTable from "./components/Supply";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/supplier" element={<Supplier/>} />
          <Route path="/formersupplier" element={<FormerSuppliersTable/>} />
          <Route path="/supply" element={<SupplyTable/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
