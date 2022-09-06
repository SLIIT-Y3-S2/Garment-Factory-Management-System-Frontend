import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import { FaUserPlus } from 'react-icons/fa';
import SupplyModel from "./ModleSupply";

import axios from "axios";
import SideNavBar from "./SupSideNavBar";


const SupplyTable = () => {
const [modalShow, setModalShow] = useState(false); 
  const [supply, setSupply] = useState([]);
 


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
    <div 
        style={{ marginLeft: "250px", marginTop: "90px", marginRight: "10px" }}
    >
      <i><h1>Supply Details</h1></i>
      <br /> <br />
      <button style={{marginLeft: "80%"}} className='btn' variant="success" onClick={() => setModalShow(true)}><FaUserPlus/>&nbsp;&nbsp;Add New Supply</button>
      <SupplyModel show={modalShow} onHide={() => setModalShow(false)} />
      <br /><br />
      <Table striped bordered hover>
        <thead>
          <tr>
          <th>Supplier ID</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Unit Price</th>
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
              <td>{supply.date}</td>
              
             
            </tr>
          </tbody>
        ))}
      </Table>
      
      
      </div>
      </>
  );
};

export default SupplyTable;