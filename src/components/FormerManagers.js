import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import AdminSideNavBar from "./AdminSideNavBar";
import { Grid } from "@mui/material";

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
            <h2 style={{ color: "#174C4F", marginTop: "20px" }}>Former Managers</h2>
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
};

export default FormerManagers;
