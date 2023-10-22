import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Slimm.css";

const Slim = () => {
  const [posts, setPosts] = useState([]);
  const id = 1;
  const forwomenId = 26;
  useEffect(() => {
    axios.get("http://localhost:5240/api/Products/GetAll").then((res) => {
      setPosts(res.data.data);
    });
  }, []);
  return (
    <div className="container">
      <div className="slimm_section">
        <h1></h1>
        <div className="slimm_section_card">
          {posts.map((item, index) => {
            if (item.catalogId === id || item.catalogId === forwomenId) {
              return (
                <div key={index} className="slimm_card">
                  <div className="slimm_card_img">
                    <Link to={`/products/${item.id}`}>
                      <img
                        src={require(`../../../img/pages/Home/${item.images[0].path}`)}
                      />
                    </Link>
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <div className="slimm_card_body">
                    <Link to={`/products/${item.id}`}>
                      <h5 className="slimm_card_title">{item.name}</h5>
                    </Link>
                    <div className="slimm_card_bottom">
                      <p className="slimm_card_text">
                        {item.price} <span>₼</span>
                      </p>
                      <button className="slimm_item_btn">Səbətə at</button>
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

export default Slim;
