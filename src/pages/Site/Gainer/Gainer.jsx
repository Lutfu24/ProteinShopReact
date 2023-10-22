import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Gainer.css";
const Gainer = () => {
  const [posts, setPosts] = useState([]);
  const id = 4;
  const yzId = 20;
  const ykId = 21;
  useEffect(() => {
    axios.get("http://localhost:5240/api/Products/GetAll").then((res) => {
      setPosts(res.data.data);
    });
  }, []);
  return (
    <div className="container">
      <div className="gainer_section">
        <h1></h1>
        <div className="gainer_section_card">
          {posts.map((item, index) => {
            if (
              item.catalogId === id ||
              item.catalogId === yzId ||
              item.catalogId === ykId
            ) {
              return (
                <div key={index} className="gainer_card">
                  <div className="gainer_card_img">
                    <Link to={`/products/${item.id}`}>
                      <img
                        src={require(`../../../img/pages/Home/${item.images[0].path}`)}
                      />
                    </Link>
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <div className="gainer_card_body">
                    <Link to={`/products/${item.id}`}>
                      <h5 className="gainer_card_title">{item.name}</h5>
                    </Link>
                    <div className="gainer_card_bottom">
                      <p className="gainer_card_text">
                        {item.price} <span>₼</span>
                      </p>
                      <button className="gainer_item_btn">Səbətə at</button>
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

export default Gainer;
