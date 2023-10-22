import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BCAA.css";

const BCAA = () => {
  const [posts, setPosts] = useState([]);
  const id = 22;
  useEffect(() => {
    axios.get("http://localhost:5240/api/Products/GetAll").then((res) => {
      setPosts(res.data.data);
    });
  }, []);
  return (
    <div className="container">
      <div className="bcaa_section">
        <h1></h1>
        <div className="bcaa_section_card">
          {posts.map((item, index) => {
            if (item.catalogId === id) {
              return (
                <div key={index} className="bcaa_card">
                  <div className="bcaa_card_img">
                    <Link to={`/products/${item.id}`}>
                      <img
                        src={require(`../../../img/pages/Home/${item.images[0].path}`)}
                      />
                    </Link>
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <div className="bcaa_card_body">
                    <Link to={`/products/${item.id}`}>
                      <h5 className="bcaa_card_title">{item.name}</h5>
                    </Link>
                    <div className="bcaa_card_bottom">
                      <p className="bcaa_card_text">
                        {item.price} <span>₼</span>
                      </p>
                      <button className="bcaa_item_btn">Səbətə at</button>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default BCAA;
