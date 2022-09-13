import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Supplier from "./components/Suppliers";
import Buyers from "./components/Buyers";
import FormerBuyers from "./components/FormerBuyers";
import AdminDashboard from "./components/AdminDashboard";
import FormerManagers from "./components/FormerManagers";
import FormerEmployees from "./components/FormerEmployees";
import FormerSuppliersTable from "./components/FormerSuppliers";
import SupplyTable from "./components/Supply";
import AddStock from "./components/AddStock";
import ViewStock from "./components/ViewStock";
import EditStockModal from "./components/EditStockModal";
import AppDeleteModal from "./components/AppDeleteModal";
import Employee from "./components/Employee";
import OutStock from "./components/OutStock";
import DeletedStocks from "./components/DeletedStocks";
import CPendingPackages from "./components/CPendingPackages";

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
          <Route path="/stocksIn" element={<AddStock />} />
          <Route path="/viewStocks" element={<ViewStock />} />
          <Route path="/editStocks" element={<EditStockModal />} />
          <Route path="/deleteStocks" element={<AppDeleteModal/>}/>
          <Route path="/employee" element={<Employee/>}/>
          <Route path="/formeremployees" element={<FormerEmployees/>}/>
          <Route path="/stocksOut" element={<OutStock/>} />
          <Route path="/deletedStocks" element={<DeletedStocks/>} />
          <Route path="/pendingPack" element={<CPendingPackages/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
