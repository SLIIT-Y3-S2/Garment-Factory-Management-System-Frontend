import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import AdminSideNavBar from './AdminSideNavBar'

const FormerManagers = () => {
    const [formerManagers, setFormerManagers] = useState([]);

    useEffect(() => {
        const getFormerManagers = () => {
            axios
              .get("http://localhost:5000/formeremployee/")
              .then((res) => {
                setFormerManagers(res.data);
              })
              .catch((err) => {
                alert(err.message);
              });
        };
        getFormerManagers();
    }, []);

  return (
    <>
      <AdminSideNavBar />
      <div className="pageBody">
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
          {formerManagers
            .filter(
              (Position) =>
                Position.Position === "Employee Manager" ||
                Position.Position === "Supplier Manager" ||
                Position.Position === "Delivery Manager" ||
                Position.Position === "Stock Manager"
            )
            .map((formermanager) => (
              <tbody key={formermanager._id}>
                <tr>
                  <td>{formermanager.Name}</td>
                  <td>{formermanager.Email}</td>
                  <td>{formermanager.Mobile}</td>
                  <td>{formermanager.Address}</td>
                  <td>{formermanager.NIC}</td>
                  <td>{formermanager.Position}</td>
                </tr>
              </tbody>
            ))}
        </Table>
      </div>
    </>
  );
}

export default FormerManagers