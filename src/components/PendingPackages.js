import React from 'react'
import Table from 'react-bootstrap/Table'
import { useState, useEffect } from "react";
import axios from "axios";
import BuyerSideNavBar from './BuyerSideNavBar';
import Badge from 'react-bootstrap/Badge'
import VehicleAssignModal from './VehicleAssignModal';

const PendingPackages = () => {
    const [order, setOrder] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const [deliverdet, setDeliverdet] = useState();

  return (
    <>
      <BuyerSideNavBar />
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
              <th>Date</th>
              <th>Time</th>
              <th>Unit Price (Rs.)</th>
              <th>Quantity</th>
              <th>Total Cost (Rs.)</th>
              <th>Approve Order</th>
            </tr>
          </thead>
          

          <tbody>
            <tr>
              <td>ord001 <Badge bg="dark">Pending</Badge></td>
              <td>buy001</td>
              <td>ABC Company</td>
              <td>T-Shirt</td>
              <td>2021-05-01</td>
              <td>10:00 AM</td>
              <td>500.00</td>
              <td>100</td>
              <td>50000.00</td>
              <td><button className='btn' onClick={() => {setModalShow(true)}}>
                Confirm
                </button></td>
            </tr>
          </tbody>
        </Table>

        <VehicleAssignModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            deliverdet={deliverdet}
        />

        
      </div>
    </> 
    
  )
}

export default PendingPackages