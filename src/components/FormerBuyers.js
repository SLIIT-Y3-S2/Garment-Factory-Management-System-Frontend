import React from "react";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import BuyerSideNavBar from "./BuyerSideNavBar";
import { Grid } from "@mui/material";

const FormerBuyers = () => {
  const [formerbuyers, setFormerBuyer] = useState([]);

  useEffect(() => {
    const getFormerBuyers = () => {
      axios
        .get("http://localhost:5000/formerbuyer")
        .then((res) => {
          setFormerBuyer(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getFormerBuyers();
  }, []);

  return (
    <>
      <BuyerSideNavBar />
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
              Former Buyers
            </h2>
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
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Buyer ID</th>
              <th>Buyer/Company Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Contact No</th>
            </tr>
          </thead>
          {formerbuyers.map((formerbuyer) => (
            <tbody key={formerbuyer._id}>
              <tr>
                <td>{formerbuyer.buyerID}</td>
                <td>{formerbuyer.buyerName}</td>
                <td>{formerbuyer.email}</td>
                <td>{formerbuyer.location}</td>
                <td>{formerbuyer.contactNo}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </>
  );
};

export default FormerBuyers;
