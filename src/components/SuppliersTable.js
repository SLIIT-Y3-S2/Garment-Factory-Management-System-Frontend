import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
 import ModleSupplier from "./ModleSupplier";
 import ModleDelete from "./SupModleDelete";


import axios from "axios";


const SuppliersTable = () => {
   const [modalShow, setModalShow] = useState(false);
   const [modaldelete, setModalDelete] = useState(false);
  const [suppliers, setSupplier] = useState([]);
  const [supplierDet, setSupplierDet] = useState('')
   const [supplierdelete, setSupplierDelete] = useState('')

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
      
    <div>
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
                 
                  <button type="button" className='btn' onClick={() => {
                        setModalShow(true);
                        setSupplierDet(supplier);
                      }}
                      style={{ cursor: "pointer" }}
                      title="Edit Supplier">Update</button>
                  &nbsp;&nbsp;&nbsp;
                  <button type="button" className='btn-del' onClick={() => {
                            setModalDelete(true);
                            setSupplierDelete(supplier);
                          }}
                          style={{ cursor: "pointer" }}
                          title="Delete Supplier">Delete</button>
                  
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
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

export default SuppliersTable;