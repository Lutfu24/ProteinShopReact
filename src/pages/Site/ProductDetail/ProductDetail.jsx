import axios from "axios";
import React from "react";
import "./ProductDetail.css";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [productid, setProductId] = useState(0);
  const [brand, setbrand] = useState([]);
  const [productImg, setProductImg] = useState([]);

  let counter = 1;

  const data = {
    count: counter,
    productId: productid,
  };

  const { id } = useParams();
  const raiting = document.getElementsByClassName(".product_detail_raiting");
  raiting.innerHTML = "";

  for (let i = 0; i < product.raiting; i++) {
    raiting.innerHTML += `<i class="fa-solid fa-star"></i>`;
  }
  const IsAvailability = () => {
    if (product.isAvailability) {
      return <span>Mövcuddur</span>;
    } else {
      <p>Mövcud deyil</p>;
    }
  };
  const IsFavorite = () => {
    if (product.isFavorite) {
      return <span>Seçilmişlərdən sil</span>;
    } else {
      return <span>Seçilmişlərə əlavə et</span>;
    }
  };

  const CheckBrand = () => {
    if (brand != null) {
      return (
        <p>
          Brand: <Link to={"/brands"}>{brand.brandName}</Link>
        </p>
      );
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5240/api/Products/GetById?id=${id}`)
      .then((res) => {
        setProduct(res.data.data);
        setbrand(res.data.data.brand);
        setProductImg(res.data.data.images);
        setProductId(res.data.data.id);
      });
  }, []);
  return (
    <div className="container product_detail_section">
      <div className="product_detail">
        <div>
          <h1>{product.name}</h1>
        </div>
        <div className="product_detail_item">
          <div>
            {CheckBrand()}
            <div className="product_detail_img_card">
              {productImg.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={require(`../../../img/pages/Home/${item.path}`)}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
          <div className="product_detail_price">
            <i className="fa-regular fa-heart"></i>
            <Link>{IsFavorite()}</Link>
            <p className="product_detail_price_item">
              {product.price} <span>₼</span>
            </p>
          </div>
          <div className="product_detail_raiting_card">
            <ul className="product_detail_raiting_card_ul">
              Reytinq:
              <li
                dangerouslySetInnerHTML={{ __html: raiting.innerHTML }}
                className="product_detail_raiting"
              ></li>
            </ul>
            <p className="product_detail_raiting_card_p">
              Mövcudluq: {IsAvailability()}
            </p>
            <p className="product_detail_raiting_card_count">
              Sayı:
              <div className="product_detail_raiting_card_count_item">
                <button>-</button>
                <div>{counter}</div>
                <button>+</button>
              </div>
            </p>
            <button
              onClick={() => {
                axios
                  .post("http://localhost:5240/api/CartItems/Add", data)
                  .then((res) => console.log(res));
              }}
              className="product_detail_raiting_card_btn"
            >
              Almaq
            </button>
          </div>
        </div>
        <div className="product_detail_desc">{product.description}</div>
      </div>
    </div>
  );
};

export default Products;
