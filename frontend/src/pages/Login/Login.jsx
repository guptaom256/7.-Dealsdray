/* eslint-disable no-unused-vars */
import "./Login.css";
import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import axios from "axios";
import loginImg from "./login.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.success === true) {
        navigate("/dashboard");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      //   toast.error(error.response.data.message);
    }
  };

  return (
    <div className="authPage">
      <div className="container">
        <div className="header">
          <h1>Dealsdray</h1>
          <h3>Login to your account</h3>
        </div>

        <form>
          <div className="inputTag">
            <label>Email Address</label>
            <div>
              <input
                type="email"
                placeholder="abc@xyz.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MdOutlineMailOutline />
            </div>
          </div>

          <div className="inputTag">
            <label>Password</label>
            <div>
              <input
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <RiLock2Fill />
            </div>
          </div>

          <button type="submit" onClick={handleLogin}>
            Login
          </button>
          {/* <Link to={"/register"}>Register Now</Link> */}
        </form>
      </div>
      <div className="banner">
        <img src={loginImg} alt="login" />
      </div>
    </div>
  );
};

export default Login;
