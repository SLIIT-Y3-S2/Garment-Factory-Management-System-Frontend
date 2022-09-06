import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { FaEdit, FaRegTrashAlt, FaUserPlus } from "react-icons/fa";
import AdminSideNavBar from "./AdminSideNavBar";
import ManagerModal from "./ManagerModal";
import EmployeeModalDelete from "./EmployeeModalDelete";

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
        <h2>
          <i>Managers</i>
        </h2>
        <button
          className="btn"
          style={{ marginLeft: "80%" }}
          onClick={() => {
            setModalShow(true);
            setManagerData(null);
          }}
        >
          <FaUserPlus />
          &nbsp;&nbsp;Add Manager
        </button>
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
          {managers.map((manager) => (
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
