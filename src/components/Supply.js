import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import { FaUserPlus } from 'react-icons/fa';
import SupplyModel from "./ModleSupply";
import { Grid } from "@mui/material";
import { BsPrinterFill } from "react-icons/bs";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";
import SideNavBar from "./SupSideNavBar";


const SupplyTable = () => {
const [modalShow, setModalShow] = useState(false); 
  const [supply, setSupply] = useState([]);

  const columns = [

    
    { title: "Supplier ID", field: "supplierId" },
    { title: "Item", field: "item" },
    { title: "Quantity", field: "qty" },
    { title: "Unit Price", field: "price" },
    { title: "Date", field: "date" },
    
  ];
 
  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("All Supplies", 90, 10);
    doc.autoTable({
      theme: "striped",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: supply,
    });
    doc.save("Supplies.pdf");
  };

 

  useEffect(() => {
    const getSupply = () => {
      axios
        .get("http://localhost:5000/supply")
        .then((res) => {
          setSupply(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getSupply();
  }, []);
  
  return (
    <>
      <SideNavBar/>
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
            <h2 style={{ color: "#174C4F", marginTop: "20px" }}>Supply Details</h2>
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
              <button className="btn" style={{ marginTop: "20px" }} onClick={() => downloadPdf()}>
                <BsPrinterFill />
                &nbsp;&nbsp;Generate Report
              </button>
              &nbsp;&nbsp;
              <button
                className="btn"
                style={{ marginTop: "20px" }}
                onClick={() => {
                  setModalShow(true);
                  
                }}
              >
                <FaUserPlus />
                &nbsp;&nbsp;Add New Supply
              </button>
            </div>
          </Grid>
          <Grid item xs={0.1} />
        </Grid>
      
    {/* <div 
        style={{ marginLeft: "250px", marginTop: "90px", marginRight: "10px" }}
    >
      <i><h1>Supply Details</h1></i>
      <br /> <br />
      <button style={{marginLeft: "80%"}} className='btn' variant="success" onClick={() => setModalShow(true)}><FaUserPlus/>&nbsp;&nbsp;Add New Supply</button>
       */}
      <br /><br />
      <Table striped bordered hover>
        <thead>
          <tr>
          <th>Supplier ID</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total Price</th>
            <th>Date</th>
            
            
          </tr>
        </thead>
        {supply.map((supply) => (
          <tbody key={supply._id}>
            <tr>
              <td>{supply.supplierId}</td>
              <td>{supply.item}</td>
              <td>{supply.qty}</td>
              <td>{supply.price}</td>
              <td>{supply.qty*supply.price}</td>
              <td>{supply.date}</td>
              
             
            </tr>
          </tbody>
        ))}
      </Table>
      <SupplyModel 
      show={modalShow} 
      onHide={() => setModalShow(false)} />
      
      </div>
      </>
  );
};

export default SupplyTable;