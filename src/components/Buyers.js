import React from 'react'
import Table from 'react-bootstrap/Table'
import { useState, useEffect } from "react";
import axios from "axios";
import BuyerModal from './BuyerModal';
import BuyerDeleteModal from './BuyerDeleteModal';
import BuyerSideNavBar from './BuyerSideNavBar';
import { MdAddCircle } from 'react-icons/md'

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
  },[]);


  return (
    <>
    <BuyerSideNavBar />
    <div className='pageBody'>

        <h2>Buyers</h2>
        <div style={{marginLeft:"80%"}}>
        <button 
            className='btn'
            onClick={() => {setModalShow(true);setBuyerdet(null)}}
        >
          <MdAddCircle />
          Add Buyer
        </button>
        </div>

        <br /><br />
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
                  <button className='btn'
                    onClick={() => {
                      setModalShow(true);
                      setBuyerdet(buyer);
                    }}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button className='btn-del'
                    onClick={() => {
                      setModalShowDel(true);
                      setBuyerdelete(buyer);
                    }}
                  >
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
  )
}

export default Buyers