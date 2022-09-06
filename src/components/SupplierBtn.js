import React from 'react'
import Button from 'react-bootstrap/Button'
import { FaUserPlus } from 'react-icons/fa';

const SupplierBtn = ({ onclick }) => {
    return (
        <button style={{marginLeft: "80%"}} className='btn' variant="success" onClick={onclick}><FaUserPlus/>&nbsp;&nbsp;Add New Supplier</button>
      
    );
};

export default SupplierBtn