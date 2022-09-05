import React from "react";
import EmpSideNavBar from "./EmpSideNavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { FaPencilAlt, FaTrash, FaUserPlus } from "react-icons/fa";
import EmployeeModalDelete from "./EmployeeModalDelete";
import EmployeeModal from "./EmployeeModal";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [employeedata, setEmployeeData] = useState(null);
  const [modalShowDelete, setModalShowDelete] = useState(false);
  const [employeedatadelete, setEmployeeDataDelete] = useState(null);

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

  return (
    <>
      <EmpSideNavBar />
      <div className="pageBody">
        <h2>
          <i>Employees</i>
        </h2>
        <button
          className="btn"
          style={{ marginLeft: "80%" }}
          onClick={() => {
            setModalShow(true);
            setEmployeeData(null);
          }}
        >
          <FaUserPlus />
          &nbsp;&nbsp;Add Employee
        </button>
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
                      <FaPencilAlt
                        onClick={() => {
                          setModalShow(true);
                          setEmployeeData(employee);
                        }}
                        style={{ cursor: "pointer" }}
                        title="Edit Employee"
                      />
                    </span>
                    &nbsp;&nbsp;&nbsp;
                    <span>
                      <FaTrash
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
