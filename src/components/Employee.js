import React from "react";
import EmpSideNavBar from "./EmpSideNavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { FaRegTrashAlt, FaEdit, FaUserPlus } from "react-icons/fa";
import EmployeeModalDelete from "./EmployeeModalDelete";
import EmployeeModal from "./EmployeeModal";
import { Grid } from "@mui/material";
import { BsPrinterFill } from "react-icons/bs";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [employeedata, setEmployeeData] = useState(null);
  const [modalShowDelete, setModalShowDelete] = useState(false);
  const [employeedatadelete, setEmployeeDataDelete] = useState(null);

  const columns = [
    { title: "Name", field: "Name" },
    { title: "Email", field: "Email" },
    { title: "Mobile Number", field: "Mobile" },
    { title: "Address", field: "Address" },
    { title: "NIC", field: "NIC" },
    { title: "Position", field: "Position" },
  ];

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("All Employees", 90, 10);
    doc.autoTable({
      theme: "striped",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: employees,
    });
    doc.save("Employees.pdf");
  };

  useEffect(() => {
    const getEmployees = () => {
      axios
        .get("http://localhost:5000/employee")
        .then((res) => {
          setEmployees(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    };
    getEmployees();
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
    setEmployees(result);
  };

  const handleTextSearch = (e) => {
    const searchTerm = e.currentTarget.value;
    console.log(searchTerm);
    axios.get("http://localhost:5000/employee").then((res) => {
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
            <h2 style={{ color: "#174C4F", marginTop: "20px" }}>Employees</h2>
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
            <div>
              <button
                className="btn"
                style={{ marginTop: "20px" }}
                onClick={() => downloadPdf()}
              >
                <BsPrinterFill />
                &nbsp;&nbsp;Generate Report
              </button>
              &nbsp;&nbsp;
              <button
                className="btn"
                style={{ marginTop: "20px" }}
                onClick={() => {
                  setModalShow(true);
                  setEmployeeData(null);
                }}
              >
                <FaUserPlus />
                &nbsp;&nbsp;Add Employee
              </button>
            </div>
          </Grid>
          <Grid item xs={0.1} />
        </Grid>
        <br />
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
              <th>Actions</th>
            </tr>
          </thead>
          {employees.map((employee) => (
            <tbody key={employee._id}>
              <tr>
                <td>{employee.Name}</td>
                <td>{employee.Email}</td>
                <td>{employee.Mobile}</td>
                <td>{employee.Address}</td>
                <td>{employee.NIC}</td>
                <td>{employee.Position}</td>
                <td>
                  <div>
                    <span>
                      <FaEdit
                        onClick={() => {
                          setModalShow(true);
                          setEmployeeData(employee);
                        }}
                        style={{ cursor: "pointer", color: "orange" }}
                        title="Edit Employee"
                      />
                    </span>
                    &nbsp;&nbsp;&nbsp;
                    <span>
                      <FaRegTrashAlt
                        onClick={() => {
                          setModalShowDelete(true);
                          setEmployeeDataDelete(employee);
                        }}
                        style={{ cursor: "pointer", color: "red" }}
                        title="Delete Employee"
                      />
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
        <EmployeeModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          employeedata={employeedata}
        />
        <EmployeeModalDelete
          show={modalShowDelete}
          onHide={() => setModalShowDelete(false)}
          employeedatadelete={employeedatadelete}
        />
      </div>
    </>
  );
};

export default Employee;
