import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SportFood.css";

const SportFood = () => {
  const [posts, setPosts] = useState([]);
  const id = 15;
  const clothesId = 14;
  const accessoriesId = 13;
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 24;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = posts.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(posts.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function chanceCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  useEffect(() => {
    axios.get("http://localhost:5240/api/Products/GetAll").then((res) => {
      setPosts(res.data.data);
    });
  }, []);
  return (
    <div className="container">
      <div className="sportfood_section">
        <h1></h1>
        <div className="sportfood_section_card">
          {records.map((item, index) => {
            if (
              item.catalogId === id ||
              item.catalogId === clothesId ||
              item.catalogId === accessoriesId
            ) {
              return;
            } else {
              return (
                <div key={index} className="sportfood_card">
                  <div className="sportfood_card_img">
                    <Link to={`/products/${item.id}`}>
                      <img
                        src={require(`../../../img/pages/Home/${item.images[0].path}`)}
                      />
                    </Link>
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <div className="sportfood_card_body">
                    <Link to={`/products/${item.id}`}>
                      <h5 className="sportfood_card_title">{item.name}</h5>
                    </Link>
                    <div className="sportfood_card_bottom">
                      <p className="sportfood_card_text">
                        {item.price} <span>₼</span>
                      </p>
                      <button className="sportfood_item_btn">Səbətə at</button>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <nav aria-label="Page navigation example m-10px">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" onClick={prePage}>
                Previous
              </a>
            </li>
            {numbers.map((n, index) => {
              return (
                <li
                  className={`page-item ${currentPage === n ? "active" : ""}`}
                  key={index}
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={() => chanceCPage(n)}
                  >
                    {n}
                  </a>
                </li>
              );
            })}
            <li className="page-item">
              <a className="page-link" href="#" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SportFood;
