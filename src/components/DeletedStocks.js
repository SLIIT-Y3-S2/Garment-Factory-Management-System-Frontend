import React from "react";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import StocksInSideNavBar from "./StocksInSideNavBar";

const DeletedStocks = () => {
  const [DeletedStocks, setDeletedStocks] = useState([]);

  useEffect(() => {
    const getDeletedStocks = () => {
      axios
        .get("http://localhost:5000/deletedstock")
        .then((res) => {
          setDeletedStocks(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getDeletedStocks();
  }, []);

  return (
    <>
      <StocksInSideNavBar />
      <div className="pageBody">
        <h2>Deleted Records</h2>

        <br />
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Record ID</th>
              <th>Garment Type</th>
              <th>Unit Price Rs.</th>
              <th>Quantity</th>
              <th>Received From</th>
              <th>Stored Section</th>
              <th>Stored Bin</th>
              <th>Date</th>
              <th>Time</th>
              <th>Deleted Date</th>
            </tr>
          </thead>
          
            <tbody>
              <tr>
                <td>6314be37883101a76790aad8</td>
                <td>Trouser Gents</td>
                <td>400</td>
                <td>100</td>
                <td>H6</td>
                <td>L9</td>
                <td>5</td>
                <td>2022-09-04</td>
                <td>08:32</td>
                <td>2022-09-04</td>
              </tr>
              <tr>
                <td>6314be37883101a76795cdp4</td>
                <td>Trouser Ladies</td>
                <td>500</td>
                <td>100</td>
                <td>H4</td>
                <td>W9</td>
                <td>2</td>
                <td>2022-09-04</td>
                <td>08:34</td>
                <td>2022-09-04</td>
              </tr>
            </tbody>
        </Table>
      </div>
    </>
  );
};

export default DeletedStocks;
