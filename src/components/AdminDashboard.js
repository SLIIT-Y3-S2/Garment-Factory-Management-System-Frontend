import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { FaEdit, FaRegTrashAlt, FaUserPlus, } from "react-icons/fa";
import AdminSideNavBar from "./AdminSideNavBar";
import ManagerModal from "./ManagerModal";
import EmployeeModalDelete from "./EmployeeModalDelete";
import { Grid } from "@mui/material";
import { BsPrinterFill } from "react-icons/bs";

const AdminDashboard = () => {
  const [managers, setManagers] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [managerdata, setManagerData] = useState(null);
  const [modalShowDelete, setModalShowDelete] = useState(false);
  const [managerdatadelete, setManagerDataDelete] = useState(null);

  useEffect(() => {
    const getManagers = () => {
      axios
        .get("http://localhost:5000/manager")
        .then((res) => {
          setManagers(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    };
    getManagers();
  }, []);
  return (
    <>
      <AdminSideNavBar />
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
            <h2 style={{ color: "#174C4F", marginTop: "20px" }}>Managers</h2>
            <input
              type="text"
              placeholder="Search"
              style={{
                width: "45%",
                height: "60px",
                borderRadius: "5px",
                border: "2px solid #174C4F",
                paddingLeft: "10px",
                marginTop: "10px",
              }}
            />
            <div>
              <button className="btn" style={{ marginTop: "20px" }}>
                <BsPrinterFill />
                &nbsp;&nbsp;Generate Report
              </button>
              &nbsp;&nbsp;
              <button
                className="btn"
                style={{ marginTop: "20px" }}
                onClick={() => {
                  setModalShow(true);
                  setManagerData(null);
                }}
              >
                <FaUserPlus />
                &nbsp;&nbsp;Add Manager
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
          {managers
            .filter((Position) => Position.Position !== "Admin")
            .map((manager) => (
              <tbody key={manager._id}>
                <tr>
                  <td>{manager.Name}</td>
                  <td>{manager.Email}</td>
                  <td>{manager.Mobile}</td>
                  <td>{manager.Address}</td>
                  <td>{manager.NIC}</td>
                  <td>{manager.Position}</td>
                  <td>
                    <div>
                      <span>
                        <FaEdit
                          onClick={() => {
                            setModalShow(true);
                            setManagerData(manager);
                          }}
                          style={{ cursor: "pointer", color: "orange" }}
                          title="Edit Manager"
                        />
                      </span>
                      &nbsp;&nbsp;&nbsp;
                      <span>
                        <FaRegTrashAlt
                          onClick={() => {
                            setModalShowDelete(true);
                            setManagerDataDelete(manager);
                          }}
                          style={{ cursor: "pointer", color: "red" }}
                          title="Delete Manager"
                        />
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
        </Table>
        <ManagerModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          managerdata={managerdata}
        />
        <EmployeeModalDelete
          show={modalShowDelete}
          onHide={() => setModalShowDelete(false)}
          managerdatadelete={managerdatadelete}
        />
      </div>
    </>
  );
};

export default AdminDashboard;
