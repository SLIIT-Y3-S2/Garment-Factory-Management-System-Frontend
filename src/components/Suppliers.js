import React from "react";
import SideNavBar from "./SupSideNavBar";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import ModleSupplier from "./ModleSupplier";
import ModleDelete from "./SupModleDelete";
import { Grid } from "@mui/material";
import { FaUserPlus } from "react-icons/fa";
import axios from "axios";

const Supplier = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modaldelete, setModalDelete] = useState(false);
  const [suppliers, setSupplier] = useState([]);
  const [supplierDet, setSupplierDet] = useState("");
  const [supplierdelete, setSupplierDelete] = useState("");

  useEffect(() => {
    const getSuppliers = () => {
      axios
        .get("http://localhost:5000/supplier")
        .then((res) => {
          setSupplier(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getSuppliers();
  }, []);

  return (
    <>
      <SideNavBar />
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
            <h2 style={{ color: "#174C4F", marginTop: "20px" }}>Suppliers</h2>
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
                onClick={() => {
                  setShowModal(true);
                }}
              >
                <FaUserPlus />
                &nbsp;&nbsp;Add New Supplier
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
              <th>Supplier ID</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Address</th>
              <th>Item</th>
              <th>Actions</th>
            </tr>
          </thead>
          {suppliers.map((supplier) => (
            <tbody key={supplier._id}>
              <tr>
                <td>{supplier.supplierId}</td>
                <td>{supplier.name}</td>
                <td>{supplier.mobile}</td>
                <td>{supplier.email}</td>
                <td>{supplier.address}</td>
                <td>{supplier.item}</td>
                <td>
                  <div>
                    <button
                      type="button"
                      className="btn"
                      onClick={() => {
                        setModalShow(true);
                        setSupplierDet(supplier);
                      }}
                      style={{ cursor: "pointer" }}
                      title="Edit Supplier"
                    >
                      Update
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button
                      type="button"
                      className="btn-del"
                      onClick={() => {
                        setModalDelete(true);
                        setSupplierDelete(supplier);
                      }}
                      style={{ cursor: "pointer" }}
                      title="Delete Supplier"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
        <ModleSupplier show={showModal} onHide={() => setShowModal(false)} />
        <ModleSupplier
          show={modalShow}
          onHide={() => setModalShow(false)}
          supplierDet={supplierDet}
        />
        <ModleDelete
          show={modaldelete}
          onHide={() => setModalDelete(false)}
          supplierdelete={supplierdelete}
        />
      </div>
    </>
  );
};

export default Supplier;
