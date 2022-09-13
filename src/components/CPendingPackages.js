import React from 'react'
import Table from 'react-bootstrap/Table'
import { useState, useEffect } from "react";
import axios from "axios";
import Badge from 'react-bootstrap/Badge'
import StocksInSideNavBar from './StocksInSideNavBar';

const CPendingPackages = () => {
  const [order, setOrder] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const [deliverdet, setDeliverdet] = useState();

  return (
    <>
      <StocksInSideNavBar/>
      <div className='pageBody'>

        <h2>Pending Orders</h2>
        <div style={{marginLeft:"80%"}}>
        <button 
            className='btn'
        >
          Generate Report
        </button>
        </div>

        <br /><br />

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Buyer ID</th>
              <th>Buyer/Company Name</th>
              <th>Garment Type</th>
              <th>Unit Price (Rs.)</th>
              <th>Quantity</th>
              <th>Total Cost (Rs.)</th>
              <th>Date</th>
              <th>Time</th>
              <th>Approve Order</th>
            </tr>
          </thead>
          

          <tbody>
            <tr>
              <td>ord001 <Badge bg="dark">Accepted</Badge></td>
              <td>buy001</td>
              <td>ABC Company</td>
              <td>TShirt Gens</td>
              <td>500.00</td>
              <td>100</td>
              <td>50000.00</td>
              <td>2021-05-01</td>
              <td>10:00 AM</td>
            </tr>
            <tr>
              <td>ord002<Badge bg="dark">Pending</Badge></td>
              <td>buy002</td>
              <td>XYZ Company</td>
              <td>Trouser Gens</td>
              <td>1500.00</td>
              <td>100</td>
              <td>150000.00</td>
              <td>2021-05-02</td>
              <td>2:00 PM</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </> 
    
  )
}

export default CPendingPackages
