import axios from "axios";
import React from "react";
import "../Brands/Brands.css";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5240/api/Brands/GetAll").then((res) => {
      setBrands(res.data.data);
    });
  }, []);
  return (
    <>
      <div className="brands_section">
        <div className="container">
          <h1>Brendlər</h1>
          <div className="brands">
            {brands.map((item, index) => {
              return (
                <Link to={"/"}>
                  <div key={index} className="brands_item">
                    <img
                      src={require(`../../../img/pages/Brands/${item.brandImages[0].path}`)}
                      alt=""
                    />
                    <p>{item.brandName}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
