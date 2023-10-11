import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import User from "./User";

const Login = () => {
  const [name, setName] = useState("");
  const [passw, setPassw] = useState("");
  const [token, setToken] = useState("");

  const handleName = (value) => {
    setName(value);
  };

  const handlePassw = (value) => {
    setPassw(value);
  };
  const data = {
    UserName: name,
    Password: passw,
  };

  const handleLogin = () => {
    const url = "http://localhost:5240/api/Auth/login";
    axios
      .post(url, data)
      .then((result) => {
        setToken(result.data.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Login = () => {
    if (token === "") {
      return (
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
      );
    } else {
      return <User Token={token} Data={data.UserName} />;
    }
  };
  return Login();
};

export default Login;
