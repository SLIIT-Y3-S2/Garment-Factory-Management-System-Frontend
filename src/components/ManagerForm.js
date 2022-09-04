import React from 'react'
import { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";

const ManagerForm = ({ data }) => {
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState(data != null ? data.Name : null);
    const [email, setEmail] = useState(data != null ? data.Email : "");
    const [mobile, setMobile] = useState(data != null ? data.Mobile : "");
    const [address, setAddress] = useState(data != null ? data.Address : "");
    const [nic, setNIC] = useState(data != null ? data.NIC : "");
    const [position, setPosition] = useState(data != null ? data.Position : "");
    const [password, setPassword] = useState(data != null ? data.Password : "");
    const [confirmPassword, setConfirmPassword] = useState(data != null ? data.ConfirmPassword : "");

    const handleSubmit = (event) => {
        const newManager = {
            Name: name,
            Email: email,
            Mobile: mobile,
            Address: address,
            NIC: nic,
            Position: position,
            Password: password,
            ConfirmPassword: confirmPassword
        };
        
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            if (data == null) {
                if (password === confirmPassword) {
                    axios
                        .post("http://localhost:5000/manager/addManager", newManager)
                        .then((data) => {
                            console.log(data);
                        })
                        .catch((err) => {
                            alert(err.message);
                        });
                }
                else {
                    alert("Passwords do not match");
                }
            }
            else {
                axios
                    .put(`http://localhost:5000/manager/updateManager/${data._id}`, newManager)
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((err) => {
                        alert(err.message);
                    });
            }
        }
        setValidated(true);
    };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-z]{2,}|[.][\w-]{2,}[.][a-z]{2,})$"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please insert Valid Email Address
        </Form.Control.Feedback>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
          </Form.Group>
          
      <Form.Group className="mb-3" controlId="formMobile">
        <Form.Label>Moblie Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Moblie Number"
          title="Must include 10 digits without Country Code"
          pattern="[0-9]{10}"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please insert Valid Mobile Number
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="FormAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Residental Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formNIC">
        <Form.Label>NIC Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="National ID Number"
          pattern="^([0-9]{9}[x|X|v|V]|[0-9]{12})$"
          value={nic}
          onChange={(e) => setNIC(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please insert Valid NIC Number
        </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formPosition">
              <Form.Label>Position</Form.Label>
              <Form.Select
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  required
                >
                  <option value="" disabled hidden>
                    Select Position
                  </option>
                  <option>Employee Manager</option>
                  <option>Supplier Manager</option>
                  <option>Delivery Manager</option>
                  <option>Stock Manager</option>
              </Form.Select>
            </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        {data == null ? (
          <div>
            <Form.Label>Create New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Create Password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Form.Text className="text-muted">
              Must contain at least one number and one uppercase and lowercase
              letter, and at least 8 or more characters
            </Form.Text>
          </div>
        ) : (
          ""
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formrePassword">
        {data == null ? (
          <div>
            <Form.Label>Re Enter New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re Enter Password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        ) : (
          ""
        )}
      </Form.Group>

      <button className='btn' type="submit">
        {data != null ? "Save Changes" : "Add"}
      </button>
    </Form>
  );
}

export default ManagerForm