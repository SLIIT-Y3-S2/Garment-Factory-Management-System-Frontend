import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";

const EmployeeForm = ({ data }) => {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState(data != null ? data.Name : null);
  const [email, setEmail] = useState(data != null ? data.Email : "");
  const [mobile, setMobile] = useState(data != null ? data.Mobile : "");
  const [address, setAddress] = useState(data != null ? data.Address : "");
  const [nic, setNIC] = useState(data != null ? data.NIC : "");
  const [position, setPosition] = useState(data != null ? data.Position : "");

  const reset = () => {
    setName("");
    setEmail("");
    setMobile("");
    setAddress("");
    setNIC("");
    setPosition("");
  };

  const handleSubmit = (event) => {
    const newEmployee = {
      Name: name,
      Email: email,
      Mobile: mobile,
      Address: address,
      NIC: nic,
      Position: position,
    };

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      if (data == null) {
        axios
          .post("http://localhost:5000/employee/addEmployee", newEmployee)
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            alert(err.message);
          });
      } else {
        axios
          .put(
            `http://localhost:5000/employee/updateEmployee/${data._id}`,
            newEmployee
          )
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
          placeholder="johndoe@gmail.com"
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
          placeholder="0701234567"
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
          <option>Supervisor</option>
          <option>Quality Checker</option>
          <option>Operator</option>
          <option>Helper</option>
          <option>Cutter Man</option>
          <option>Iron Man</option>
        </Form.Select>
      </Form.Group>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="btn" type="submit">
          {data != null ? "Save Changes" : "Add Employee"}
        </button>
        <button className="btn" type="reset" onClick={() => reset()}>
          Reset
        </button>
      </div>
    </Form>
  );
};

export default EmployeeForm;
