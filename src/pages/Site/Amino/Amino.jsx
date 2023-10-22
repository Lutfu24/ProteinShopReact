import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Amino.css";

const Amino = () => {
  const [posts, setPosts] = useState([]);
  const id = 3;
  const BcaaId = 22;
  const aIid = 23;
  useEffect(() => {
    axios.get("http://localhost:5240/api/Products/GetAll").then((res) => {
      setPosts(res.data.data);
    });
  }, []);
  return (
    <div className="container">
      <div className="amino_section">
        <h1></h1>
        <div className="amino_section_card">
          {posts.map((item, index) => {
            if (
              item.catalogId === id ||
              item.catalogId === BcaaId ||
              item.catalogId === aIid
            ) {
              return (
                <div key={index} className="amino_card">
                  <div className="amino_card_img">
                    <Link to={`/products/${item.id}`}>
                      <img
                        src={require(`../../../img/pages/Home/${item.images[0].path}`)}
                      />
                    </Link>
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <div className="amino_card_body">
                    <Link to={`/products/${item.id}`}>
                      <h5 className="amino_card_title">{item.name}</h5>
                    </Link>
                    <div className="amino_card_bottom">
                      <p className="amino_card_text">
                        {item.price} <span>₼</span>
                      </p>
                      <button className="amino_item_btn">Səbətə at</button>
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

export default Amino;
