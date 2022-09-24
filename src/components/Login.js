import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const Login = () => {
  const [data, setData] = useState({ Email: "", Password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const url = "http://localhost:5000/manager/login";
          const { data: res } = await axios.post(url, data);
          swal("Success", "Login Successfully", "success");
          sessionStorage.setItem("token", res.data);
          navigate("/");
      } catch (error) {
          if(error.response && error.response.status >= 400 && error.response.status <= 500) {
              setError(error.response.data.message);
          }
        }
  };

  return (
    <div>
      <Header />
      <div className="login_container">
        <div className="login_form_container">
          <div className="left">
            <form className="form_container" onSubmit={handleSubmit}>
              <h1>Login to Your Account</h1>
              <input
                type="email"
                placeholder="Email"
                name="Email"
                onChange={handleChange}
                value={data.Email}
                required
                className="input"
              />
              <input
                type="password"
                placeholder="Password"
                name="Password"
                onChange={handleChange}
                value={data.Password}
                required
                className="input"
              />
              {error && <div className="error_msg">{error}</div>}
              <button type="submit" className="green_btn">
               Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
