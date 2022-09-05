import React from 'react'
import Table from 'react-bootstrap/Table'
import { useState, useEffect } from "react";
import axios from "axios";
import BuyerSideNavBar from './BuyerSideNavBar';

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
    },[]);

  return (
    <>
    <BuyerSideNavBar />
    <div className='pageBody'>

        <h2>Former Buyers</h2>

        <br /><br />
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
  )
}

export default FormerBuyers