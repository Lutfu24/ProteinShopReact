import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const User = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:5240/api/Auth/GetUser?userName=${props.Data}`, {
        headers: {
          Authorization: "Bearer " + props.Token,
        },
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.data));
      })
      .catch((err) => console.log(err));
  }, []);

  const copyUser = JSON.parse(localStorage.getItem("user"));

  return copyUser === null ? (
    navigate("/user/login")
  ) : (
    <div className="login">
      <div className="container">
        <div className="login_section">
          <h1>Mənim hesabım</h1>
          <form className="login_form">
            <input type="text" defaultValue={copyUser.userName} id="userName" />
            <input type="text" defaultValue={copyUser.fullName} id="fullName" />
            <input type="email" defaultValue={copyUser.email} id="email" />
            <input type="tel" defaultValue={copyUser.phoneNumber} id="text" />
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
