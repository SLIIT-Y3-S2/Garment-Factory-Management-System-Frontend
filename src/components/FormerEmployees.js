import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import EmpSideNavBar from "./EmpSideNavBar";
import { Grid } from "@mui/material";

const FormerEmployees = () => {
  const [formerEmployees, setFormerEmployees] = useState([]);

  useEffect(() => {
    const getFormerEmployees = () => {
      axios
        .get("http://localhost:5000/formeremployee/")
        .then((res) => {
          setFormerEmployees(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    };
    getFormerEmployees();
  }, []);

  const filterContent = (employeess, searchTerm) => {
    const result = employeess.filter(
      (employee) =>
        employee.Name.toLowerCase().includes(searchTerm) ||
        employee.Email.toLowerCase().includes(searchTerm) ||
        employee.Mobile.toLowerCase().includes(searchTerm) ||
        employee.Address.toLowerCase().includes(searchTerm) ||
        employee.NIC.toLowerCase().includes(searchTerm) ||
        employee.Position.toLowerCase().includes(searchTerm)
    );
    setFormerEmployees(result);
  };

  const handleTextSearch = (e) => {
    const searchTerm = e.currentTarget.value;
    console.log(searchTerm);
    axios.get("http://localhost:5000/formeremployee").then((res) => {
      if (res.data) {
        filterContent(res.data, searchTerm);
      }
    });
  };


  return (
    <>
      <EmpSideNavBar />
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
            <h2 style={{ color: "#174C4F", marginTop: "20px" }}>
              Former Employees
            </h2>
            <input
              className="form-control"
              name="searchTerm"
              type="search"
              placeholder="Search"
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
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Address</th>
              <th>NIC</th>
              <th>Position</th>
            </tr>
          </thead>
          {formerEmployees
            .filter(
              (Position) =>
                Position.Position !== "Employee Manager" &&
                Position.Position !== "Supplier Manager" &&
                Position.Position !== "Delivery Manager" &&
                Position.Position !== "Stock Manager"
            )
            .map((formerEmployee) => (
              <tbody key={formerEmployee._id}>
                <tr>
                  <td>{formerEmployee.Name}</td>
                  <td>{formerEmployee.Email}</td>
                  <td>{formerEmployee.Mobile}</td>
                  <td>{formerEmployee.Address}</td>
                  <td>{formerEmployee.NIC}</td>
                  <td>{formerEmployee.Position}</td>
                </tr>
              </tbody>
            ))}
        </Table>
      </div>
    </>
  );
};

export default FormerEmployees;
