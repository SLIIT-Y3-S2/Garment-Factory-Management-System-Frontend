import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import EmpSideNavBar from "./EmpSideNavBar";

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

  return (
    <>
      <EmpSideNavBar />
      <div className="pageBody">
        <h2>
          <i>Former Employees</i>
        </h2>
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
