import React from "react";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import jwtDecode from "jwt-decode";

const Header = () => {
  const token = sessionStorage.getItem("token");
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userDetails = () => {
      const token = sessionStorage.getItem("token");
      if (token) {
        const userdetails = jwtDecode(token);
        setUser(userdetails);
      }
    };
    userDetails();
  }, []);

  const handlelogout = () => {
    swal({
      title: "Log Out",
      text: "Are you sure you want to log out?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willLogout) => {
      if (willLogout) {
        sessionStorage.removeItem("token");
        swal("Success", "Logout Successfully", "success");
        navigate("/");
      }
    });
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/Logo.png"
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href={
                user.Position === "Admin"
                  ? "/admindashboard"
                  : user.Position === "Employee Manager"
                  ? "/employee"
                  : user.Position === "Supplier Manager"
                  ? "/supplier"
                  : user.Position === "Delivery Manager"
                  ? "/buyer"
                  : user.Position === "Stock Manager"
                  ? "/viewStocks"
                  : "/login"
              }
            >
              Dashboard
            </Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
          <Nav>
            {token == null ? (
              <Nav.Link eventKey={2} href="/login">
                Login
              </Nav.Link>
            ) : (
              <Nav.Link eventKey={2} onClick={handlelogout}>
                Log Out
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
