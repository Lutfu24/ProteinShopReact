import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Creatin.css";

const Creatin = () => {
  const [posts, setPosts] = useState([]);
  const id = 6;
  useEffect(() => {
    axios.get("http://localhost:5240/api/Products/GetAll").then((res) => {
      setPosts(res.data.data);
    });
  }, []);
  return (
    <div className="container">
      <div className="creatin_section">
        <h1></h1>
        <div className="creatin_section_card">
          {posts.map((item, index) => {
            if (item.catalogId == id) {
              return (
                <div key={index} className="creatin_card">
                  <div className="creatin_card_img">
                    <Link to={`/products/${item.id}`}>
                      <img
                        src={require(`../../../img/pages/Home/${item.images[0].path}`)}
                      />
                    </Link>
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <div className="creatin_card_body">
                    <Link to={`/products/${item.id}`}>
                      <h5 className="creatin_card_title">{item.name}</h5>
                    </Link>
                    <div className="creatin_card_bottom">
                      <p className="creatin_card_text">{item.price}</p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
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

export default Creatin;
