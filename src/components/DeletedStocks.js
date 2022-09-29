import React from "react";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import StocksInSideNavBar from "./StocksInSideNavBar";
import { Grid } from "@mui/material";
import { BsPrinterFill } from "react-icons/bs";
import jsPDF from "jspdf";
import "jspdf-autotable";

const DeletedStocks = () => {
  const [DeletedStocks, setDeletedStocks] = useState([]);

  const columns = [
    { title: "Garment Type", field: "GarmentType" },
    { title: "Unit Price Rs.", field: "UnitPrice" },
    { title: "Quantity", field: "Quantity" },
    { title: "Received From", field: "ReceivedFrom" },
    { title: "Stored Section", field: "StoredSection" },
    { title: "Stored Bin", field: "StoredBin" },
    { title: "Date", field: "Date" },
    { title: "Time", field: "Time" },
    { title: "Deleted Date", field: "DeletedDate" },
  ];

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("Deleted Stocks Records", 90, 10);
    doc.autoTable({
      theme: "striped",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: DeletedStocks,
    });
    doc.save("Deleted Stocks Records on " + Date() + ".pdf");
  };

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
              Deleted Stocks
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
            <div>
              <button
                className="btn"
                style={{ marginTop: "20px" }}
                onClick={() => downloadPdf()}
              >
                <BsPrinterFill />
                &nbsp;&nbsp;Deleted Stock Report
              </button>
              &nbsp;&nbsp;
            </div>
          </Grid>
          <Grid item xs={0.1} />
        </Grid>

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
          
          {DeletedStocks.map((deletedStocks) => (
          <tbody key={deletedStocks._id}>              
          <tr>
                <td>{deletedStocks._id}</td>
                <td>{deletedStocks.GarmentType}</td>
                <td>{deletedStocks.UnitPrice}</td>
                <td>{deletedStocks.Quantity}</td>
                <td>{deletedStocks.ReceivedFrom}</td>
                <td>{deletedStocks.StoredSection}</td>
                <td>{deletedStocks.StoredBin}</td>
                <td>{deletedStocks.Date}</td>
                <td>{deletedStocks.Time}</td>
                <td>{Date()}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </>
  );
};

export default DeletedStocks;
