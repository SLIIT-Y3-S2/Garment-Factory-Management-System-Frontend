import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Buyers from "./components/Buyers";
import FormerBuyers from "./components/FormerBuyers";
import AdminDashboard from "./components/AdminDashboard";
import FormerManagers from "./components/FormerManagers";
import FormerEmployees from "./components/FormerEmployees";
import Employee from "./components/Employee";

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
          <Route path="/employee" element={<Employee />} />
          <Route path="/formeremployees" element={<FormerEmployees/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
