import React from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

const Login = () => {
  const [name, setName] = useState("");
  const [passw, setPassw] = useState("");
  const navigate = useNavigate();

  const handleName = (value) => {
    setName(value);
  };

  const handlePassw = (value) => {
    setPassw(value);
  };

  const handleLogin = () => {
    const url = "http://localhost:5240/api/Auth/login";

    const data = {
      UserName: name,
      Password: passw,
    };

    axios
      .post(url, data)
      .then((result) => {
        Cookies.set("token", result.data.accessToken.data.token);
        Cookies.set("username", result.data.userName);
        navigate("/user");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const token = Cookies.get("token");

  return token == null ? (
    <div className="login">
      <div className="container">
        <div className="login_section">
          <h1>Giriş</h1>
          <form className="login_form">
            <input
              type="text"
              name="userName"
              id="name"
              placeholder="Username*"
              onChange={(e) => handleName(e.target.value)}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Şifrəniz*"
              onChange={(e) => handlePassw(e.target.value)}
            />
          </form>
          <div className="login_btn_card">
            <button
              onClick={() => {
                handleLogin();
              }}
              className="login_btn"
              type="submit"
            >
              Daxil ol
            </button>
            <Link>
              <span>Şifrəni unutmuşam</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="login">
      <div className="container">
        <div className="login_section">
          <h1>Login successfully</h1>
          <Link to="/">go to home</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
