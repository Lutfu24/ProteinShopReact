import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const User = () => {
  useEffect(() => {
    const userName = Cookies.get("username");
    axios
      .get(`http://localhost:5240/api/Auth/GetUser?userName=${userName}`)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.data));
      })
      .catch((err) => console.log(err));
  }, []);

  const copyUser = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="login">
      <div className="container">
        <div className="login_section">
          <h1>Mənim hesabım</h1>
          <form className="login_form">
            <input
              type="text"
              defaultValue={copyUser === null ? null : copyUser.userName}
              id="userName"
            />
            <input
              type="text"
              defaultValue={copyUser === null ? null : copyUser.fullName}
              id="fullName"
            />
            <input
              type="email"
              defaultValue={copyUser === null ? null : copyUser.email}
              id="email"
            />
            <input
              type="tel"
              defaultValue={copyUser === null ? null : copyUser.phoneNumber}
              id="text"
            />
          </form>
          <Link>
            <span className="passw_change">Şifrəni dəyiş</span>
          </Link>
          <div className="logout_btn_card">
            <button className="login_btn" type="submit">
              Yadda saxla
            </button>
            <button className="login_btn" type="submit">
              Çıxış
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
