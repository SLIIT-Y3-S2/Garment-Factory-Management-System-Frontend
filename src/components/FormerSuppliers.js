import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import SideNavBar from "./SupSideNavBar";


const FormerSuppliersTable = () => {
 
  const [suppliers, setSupplier] = useState([]);
 


  useEffect(() => {
    const getSuppliers = () => {
      axios
        .get("http://localhost:5000/formersupplier")
        .then((res) => {
          setSupplier(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getSuppliers();
  }, []);
  
  return (
    <>
      <SideNavBar/>
    <div 
        style={{ marginLeft: "250px", marginTop: "90px", marginRight: "10px" }}
    >
      <i><h1>All Former Suppliers</h1></i>
      <br /> <br />
      <Table striped bordered hover>
        <thead>
          <tr>
          <th>Supplier ID</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Address</th>
            <th>Item</th>
            
          </tr>
        </thead>
        {suppliers.map((supplier) => (
          <tbody key={supplier._id}>
            <tr>
              <td>{supplier.supplierId}</td>
              <td>{supplier.name}</td>
              <td>{supplier.mobile}</td>
              <td>{supplier.email}</td>
              <td>{supplier.address}</td>
              <td>{supplier.item}</td>
             
            </tr>
          </tbody>
        ))}
      </Table>
      
     
      </div>
      </>
  );
};

export default FormerSuppliersTable;