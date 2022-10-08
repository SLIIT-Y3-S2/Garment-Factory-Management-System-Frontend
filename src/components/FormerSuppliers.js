import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";


import axios from "axios";
import SideNavBar from "./SupSideNavBar";


const FormerSuppliersTable = () => {
 
  const [formersuppliers, setFormerSupplier] = useState([]);
 


  useEffect(() => {
    const getFormerSuppliers = () => {
      axios
        .get("http://localhost:5000/formersupplier")
        .then((res) => {
          setFormerSupplier(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getFormerSuppliers();
  }, []);

  const filterContent = (fsuppliers, searchTerm) => {
    const result = fsuppliers.filter(
      (supplier) =>
      supplier.supplierId.toLowerCase().includes(searchTerm) ||
      supplier.name.toLowerCase().includes(searchTerm) ||
      supplier.mobile.toLowerCase().includes(searchTerm) ||
      supplier.email.toLowerCase().includes(searchTerm) ||
      supplier.address.toLowerCase().includes(searchTerm) ||
      supplier.item.toLowerCase().includes(searchTerm)
    );
    setFormerSupplier(result);
  };

  const handleTextSearch = (e) => {
    const searchTerm = e.currentTarget.value;
    console.log(searchTerm);
    axios.get("http://localhost:5000/formersupplier").then((res) => {
      if (res.data) {
        filterContent(res.data, searchTerm);
      }
    });
  };
  
  return (
    <>
      <SideNavBar/>
      <div className="pageBody">
        <Grid container>
          <Grid item xs={0.1} />
          <Grid
            item
            xs={11.8}
            style={{
              backgroundColor: "#63C2C7",
              height: "80px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 10px 0px 10px",
              boxShadow: "5px 5px 5px rgba(0,0,0,0.75)",
            }}
          >
            <h2 style={{ color: "#174C4F", marginTop: "20px" }}>Former Suppliers</h2>
            <input
              placeholder="Search"
              className="form-control"
              name="searchTerm"
              type="search"
              style={{
                width: "45%",
                height: "60px",
                borderRadius: "5px",
                border: "2px solid #174C4F",
                paddingLeft: "10px",
                marginTop: "10px",
              }}
              onChange={handleTextSearch}
            />
          </Grid>
          <Grid item xs={0.1} />
        </Grid>
    {/* <div 
        style={{ marginLeft: "250px", marginTop: "90px", marginRight: "10px" }}
    >
      <i><h1>All Former Suppliers</h1></i> */}
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
        {formersuppliers.map((supplier) => (
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