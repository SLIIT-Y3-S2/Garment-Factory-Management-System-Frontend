import React from 'react';
import SupplierBtn from './SupplierBtn';
import { useState } from 'react';
import ModleSupplier from './ModleSupplier';
import SuppliersTable from './SuppliersTable';
import SideNavBar from './SupSideNavBar';


const Supplier = () => {
    const [showModal, setShowModal] = useState(false)

  return (
      <>
      <SideNavBar/>
      
      <div
        style={{ marginLeft: "250px", marginTop: "90px", marginRight: "10px" }}
      >
        <h1>
          <i>
            {/* <u>All Suppliers</u> */}
            <h1>All Suppliers</h1>
          </i>
        </h1>
        <br />
        <SupplierBtn onclick={() => setShowModal(true)} />
        <br/><br/>
        <ModleSupplier show={showModal} onHide={() => setShowModal(false)} />
        <SuppliersTable />
      </div>
      </>
    );
}

export default Supplier;