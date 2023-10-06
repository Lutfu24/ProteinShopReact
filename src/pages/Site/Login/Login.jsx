import React, { useEffect } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [passw, setPassw] = useState("");

  const handleName = (value) => {
    setName(value);
  };

  const handlePassw = (value) => {
    setPassw(value);
  };

  const handleLogin = () => {
    const data = {
      UserName: name,
      Password: passw,
    };

    const url = "http://localhost:5240/api/Auth/login";

    axios
      .post(url, data)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login">
      <div className="container">
        <div className="login_section">
          <h1>Giriş</h1>
          <form className="login_form">
            <input
              type="text"
              name="userName"
              id=""
              placeholder="Username*"
              onChange={(e) => handleName(e.target.value)}
            />
            <input
              type="password"
              name="password"
              id=""
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
  );
};

export default Login;
