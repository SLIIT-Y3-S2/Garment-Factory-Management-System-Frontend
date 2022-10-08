import React from "react";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import BuyerSideNavBar from "./BuyerSideNavBar";
import Badge from "react-bootstrap/Badge";
import VehicleAssignModal from "./VehicleAssignModal";
import { Grid } from "@mui/material";
import { BsCheckCircleFill } from "react-icons/bs";

const PendingPackages = () => {
  const [orders, setOrder] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [deliverdet, setDeliverdet] = useState();

  useEffect(() => {
    const getOrders = () => {
      axios
        .get("http://localhost:5000/stockOut")
        .then((res) => {
          setOrder(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getOrders();
  }, []);

  const filterContent = (porders, searchTerm) => {
    const result = porders.filter(
      (porder) =>
        porder.OrderId.toLowerCase().includes(searchTerm) ||
        porder.BuyerId.toLowerCase().includes(searchTerm) ||
        porder.BuyerName.toLowerCase().includes(searchTerm) ||
        porder.GarmentType.toLowerCase().includes(searchTerm) ||
        porder.Date.toLowerCase().includes(searchTerm) ||
        porder.Time.toLowerCase().includes(searchTerm)
    );
    setOrder(result);
  };

  const handleTextSearch = (e) => {
    const searchTerm = e.currentTarget.value;
    console.log(searchTerm);
    axios.get("http://localhost:5000/stockOut").then((res) => {
      if (res.data) {

        filterContent(res.data, searchTerm);
      }
    });
  };


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
              Pending Deliveries
            </h2>
            <input
              placeholder="Search"
              className="form-control"
              name="searchTerm"
              type="search"
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
          </Grid>
          <Grid item xs={0.1} />
        </Grid>

        <br />
        <br />

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Buyer ID</th>
              <th>Buyer/Company Name</th>
              <th>Garment Type</th>
              <th>Date</th>
              <th>Time</th>
              <th>Unit Price (Rs.)</th>
              <th>Quantity</th>
              <th>Total Cost (Rs.)</th>
              <th>Approve Order</th>
            </tr>
          </thead>

          {orders.map((order) => (
          <tbody key ={order._id}>
            <tr>
              <td>
                {order.OrderId} <Badge bg="dark">Pending</Badge>
              </td>
              <td>{order.BuyerId}</td>
              <td>{order.BuyerName}</td>
              <td>{order.GarmentType}</td>
              <td>{order.Date}</td>
              <td>{order.Time}</td>
              <td>{order.UnitPrice}</td>
              <td>{order.Quantity}</td>
              <td>{order.TotalCost}</td>
              <td>
                <button
                  className="btn"
                  onClick={() => {
                    setModalShow(true);
                    setDeliverdet(order);
                  }}
                >
                  <BsCheckCircleFill />
                  &nbsp;
                  Confirm
                </button>
              </td>
            </tr>
          </tbody>
          ))}
        </Table>

        <VehicleAssignModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          deliverdet={deliverdet}
        />
      </div>
    </>
  );
};

export default PendingPackages;
