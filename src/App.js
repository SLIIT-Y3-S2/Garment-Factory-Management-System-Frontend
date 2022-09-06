import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

import SuppliersTable from "./components/SuppliersTable";
import Supplier from "./components/Suppliers";
import Buyers from "./components/Buyers";
import FormerBuyers from "./components/FormerBuyers";
import AdminDashboard from "./components/AdminDashboard";
import FormerManagers from "./components/FormerManagers";
import FormerEmployees from "./components/FormerEmployees";
import SupplierForm from "./components/SupplierForm";
import FormerSuppliersTable from "./components/FormerSuppliers";
import SupplyTable from "./components/Supply";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/formermanagers" element={<FormerManagers/>}/>
          <Route path="/buyer" element={<Buyers />} />
          <Route path="/formerbuyer" element={<FormerBuyers />} />
          <Route path="/supplier" element={<Supplier/>} />
          <Route path="/formersupplier" element={<FormerSuppliersTable/>} />
          <Route path="/supply" element={<SupplyTable/>} />
          <Route path="/formeremployees" element={<FormerEmployees/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
