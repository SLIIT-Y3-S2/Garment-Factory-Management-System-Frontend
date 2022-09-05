import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Employee from "./components/Employee";
import AdminDashboard from "./components/AdminDashboard";
import FormerManagers from "./components/FormerManagers";
import FormerEmployees from "./components/FormerEmployees";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/formermanagers" element={<FormerManagers/>}/>
          <Route path="/employee" element={<Employee />} />
          <Route path="/formeremployees" element={<FormerEmployees/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
