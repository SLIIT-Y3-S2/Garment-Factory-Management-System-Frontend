import React from "react";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import BuyerModal from "./BuyerModal";
import BuyerDeleteModal from "./BuyerDeleteModal";
import BuyerSideNavBar from "./BuyerSideNavBar";
import { MdAddCircle } from "react-icons/md";
import { Grid } from "@mui/material";
import { BsFillPencilFill, BsPlusCircleFill, BsFillTrashFill } from "react-icons/bs";

const Buyers = () => {
  const [buyers, setBuyer] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowdel, setModalShowDel] = React.useState(false);
  const [buyerdet, setBuyerdet] = useState();
  const [buyerdelete, setBuyerdelete] = useState();

  useEffect(() => {
    const getBuyers = () => {
      axios
        .get("http://localhost:5000/buyer")
        .then((res) => {
          setBuyer(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getBuyers();
  }, []);

  const filterContent = (buyers, searchTerm) => {
    const result = buyers.filter(
      (buyer) =>
        buyer.buyerID.toLowerCase().includes(searchTerm) ||
        buyer.buyerName.toLowerCase().includes(searchTerm) ||
        buyer.email.toLowerCase().includes(searchTerm) ||
        buyer.location.toLowerCase().includes(searchTerm) ||
        buyer.contactNo.toLowerCase().includes(searchTerm)
    );
    setBuyer(result);
  };

  const handleTextSearch = (e) => {
    const searchTerm = e.currentTarget.value;
    console.log(searchTerm);
    axios.get("http://localhost:5000/buyer").then((res) => {
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
            <h2 style={{ color: "#174C4F", marginTop: "20px" }}>Buyers</h2>
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
            <div>
              <button
                style={{ marginTop: "20px" }}
                className="btn"
                onClick={() => {
                  setModalShow(true);
                  setBuyerdet(null);
                }}
              >
                <BsPlusCircleFill />
                &nbsp;
                Add Buyer
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
              <th>Buyer ID</th>
              <th>Buyer/Company Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Contact No</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          {buyers.map((buyer) => (
            <tbody key={buyer._id}>
              <tr>
                <td>{buyer.buyerID}</td>
                <td>{buyer.buyerName}</td>
                <td>{buyer.email}</td>
                <td>{buyer.location}</td>
                <td>{buyer.contactNo}</td>
                <td>
                  <button
                    className="btn"
                    onClick={() => {
                      setModalShow(true);
                      setBuyerdet(buyer);
                    }}
                  >
                    <BsFillPencilFill />
                    &nbsp;
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn-del"
                    onClick={() => {
                      setModalShowDel(true);
                      setBuyerdelete(buyer);
                    }}
                  >
                    <BsFillTrashFill />
                    &nbsp;
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>

        <BuyerModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          buyerdet={buyerdet}
        />

        <BuyerDeleteModal
          show={modalShowdel}
          onHide={() => setModalShowDel(false)}
          buyerdelete={buyerdelete}
        />
      </div>
    </>
  );
};

export default Buyers;
