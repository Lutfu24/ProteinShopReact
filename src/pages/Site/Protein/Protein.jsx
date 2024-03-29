import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Protein.css";

const Protein = () => {
  const [posts, setPosts] = useState([]);
  const id = 5;
  const wheyId = 15;
  const KazeinId = 16;
  const HidroId = 17;
  const ypId = 18;
  const IzolyatId = 19;
  useEffect(() => {
    axios.get("http://localhost:5240/api/Products/GetAll").then((res) => {
      setPosts(res.data.data);
    });
  }, []);
  return (
    <div className="container">
      <div className="protein_section">
        <h1></h1>
        <div className="protein_section_card">
          {posts.map((item, index) => {
            if (
              item.catalogId === id ||
              item.catalogId === wheyId ||
              item.catalogId === KazeinId ||
              item.catalogId === HidroId ||
              item.catalogId === ypId ||
              item.catalogId === IzolyatId
            ) {
              return (
                <div key={index} className="protein_card">
                  <div className="protein_card_img">
                    <Link to={`/products/${item.id}`}>
                      <img
                        src={require(`../../../img/pages/Home/${item.images[0].path}`)}
                      />
                    </Link>
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <div className="protein_card_body">
                    <Link to={`/products/${item.id}`}>
                      <h5 className="protein_card_title">{item.name}</h5>
                    </Link>
                    <div className="protein_card_bottom">
                      <p className="protein_card_text">
                        {item.price} <span>₼</span>
                      </p>
                      <button className="protein_item_btn">Səbətə at</button>
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

export default Protein;
