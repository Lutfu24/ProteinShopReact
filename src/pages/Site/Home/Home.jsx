import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [news, setNews] = useState([]);
  const [disc, setDisc] = useState([]);
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5240/api/Products/GetFilterBest?isBestSeller=true")
      .then((res) => {
        setPosts(res.data.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:5240/api/Products/GetFilterNew?isNew=true")
      .then((res) => {
        setNews(res.data.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:5240/api/Products/GetFilterDiscount")
      .then((res) => {
        setDisc(res.data.data);
      });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:5240/api/Blogs/GetAll").then((res) => {
      setBlog(res.data.data);
    });
  }, []);
  const fadeImages = [
    {
      url: require("../../../img/pages/Home/UltimateWebBanner.jpg"),
    },
    {
      url: require("../../../img/pages/Home/DRAXBanner2022.jpg"),
    },
    {
      url: require("../../../img/pages/Home/NitroTechBanner2022.jpg"),
    },
    {
      url: require("../../../img/pages/Home/Gaspari2022.jpg"),
    },
    {
      url: require("../../../img/pages/Home/BirKartBanner2022.jpg"),
    },
    {
      url: require("../../../img/pages/Home/MPBanner2021.jpg"),
    },
    {
      url: require("../../../img/pages/Home/Lipo6UCweb.jpg"),
    },
    {
      url: require("../../../img/pages/Home/HardcoreBanner.jpg"),
    },
  ];
  return (
    <>
      <div className="container">
        <div className="slide-container">
          <Fade>
            {fadeImages.map((fadeImage, index) => (
              <div key={index}>
                <img style={{ width: "100%" }} src={fadeImage.url} />
                <h2>{fadeImage.caption}</h2>
              </div>
            ))}
          </Fade>
        </div>
      </div>
      <div className="Brands">
        <div className="container">
          <div className="brands_top">
            <div>
              <span>Sürətli çatdırılma</span>
            </div>
            <div>
              <span>Keyfiyyətə zəmanət</span>
            </div>
            <div>
              <span>Malın dəyişdirilməsi</span>
            </div>
            <div>
              <span>Yerində əldə etmə</span>
            </div>
          </div>
          <h4 className="brands_title">Brendlər</h4>
          <div className="brands_bottom">
            <div className="brands_bottom_div">
              <div className="brands_bottom_img">
                <img
                  src={require("../../../img/pages/Brands/2209333d-4c41-4b5e-be41-11c8b63b1e71.500x500.png")}
                  alt=""
                />
              </div>
              <p>MuscleTech</p>
            </div>
            <div className="brands_bottom_div">
              <div className="brands_bottom_img">
                <img
                  src={require("../../../img/pages/Brands/5.500x500.png")}
                  alt=""
                />
              </div>
              <p>Gaspari</p>
            </div>
            <div className="brands_bottom_div">
              <div className="brands_bottom_img">
                <img
                  src={require("../../../img/pages/Brands/nutrexresearch.500x500.png")}
                  alt=""
                />
              </div>
              <p>Nutrex</p>
            </div>
            <div className="brands_bottom_div">
              <div className="brands_bottom_img">
                <img
                  src={require("../../../img/pages/Brands/xtendlogo2014.500x500.png")}
                  alt=""
                />
              </div>
              <p>Xtend</p>
            </div>
            <div className="brands_bottom_div">
              <div className="brands_bottom_img">
                <img
                  src={require("../../../img/pages/Brands/hardcorelogo.500x500.png")}
                  alt=""
                />
              </div>
              <p>Mega Sport</p>
            </div>
            <div className="brands_bottom_div">
              <div className="brands_bottom_img">
                <img
                  src={require("../../../img/pages/Brands/my_protein_logo_white-01.500x500.png")}
                  alt=""
                />
              </div>
              <p>Myprotein</p>
            </div>
            <div className="brands_bottom_div">
              <div className="brands_bottom_img">
                <img
                  src={require("../../../img/pages/Brands/optimum-nutrition.500x500.png")}
                  alt=""
                />
              </div>
              <p>Optimum Nutrition</p>
            </div>
            <div className="brands_bottom_div">
              <div className="brands_bottom_img">
                <img
                  src={require("../../../img/pages/Brands/universalnutrition.500x500.png")}
                  alt=""
                />
              </div>
              <p>Universal Nutrition</p>
            </div>
            <div className="brands_bottom_div">
              <div className="brands_bottom_img">
                <img
                  src={require("../../../img/pages/Brands/ronniecoleman.500x500.png")}
                  alt=""
                />
              </div>
              <p>Ronnie Coleman</p>
            </div>
            <div className="brands_bottom_div">
              <div className="brands_bottom_img">
                <img
                  src={require("../../../img/pages/Brands/logo.500x500.png")}
                  alt=""
                />
              </div>
              <p>Drax Fitness</p>
            </div>
            <div className="brands_bottom_div end">
              <div className="brands_bottom_img">
                <img
                  src={require("../../../img/pages/Brands/ultimatenutritionlogo.500x500.png")}
                  alt=""
                />
              </div>
              <p>Ultimate Nutrition</p>
            </div>
          </div>
        </div>
      </div>
      <div className="popular">
        <div className="container">
          <h4 className="popular_title">Ən çox satılanlar</h4>
          <div className="popular_items">
            {posts.map((item, index) => {
              if (index > 3) {
                return;
              } else {
                return (
                  <div key={index} className="popular_item">
                    <div className="popular_item_image">
                      <Link to={`/products/${item.id}`}>
                        <img
                          src={require(`../../../img/pages/Home/${item.images[0].path}`)}
                          alt=""
                        />
                      </Link>
                      <i className="fa-regular fa-heart"></i>
                    </div>
                    <Link to={`/products/${item.id}`}>{item.name}</Link>
                    <h1>
                      {item.price} <span>₼</span>
                    </h1>
                    <button className="popular_item_btn">Səbətə at</button>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="news">
        <div className="container">
          <h4 className="news_title">Yeni məhsullar</h4>
          <div className="news_items">
            {news.map((item, index) => {
              if (index > 3) {
                return;
              } else {
                return (
                  <div key={index} className="news_item">
                    <div className="news_item_image">
                      <Link to={`/products/${item.id}`}>
                        <img
                          src={require(`../../../img/pages/Home/${item.images[0].path}`)}
                          alt=""
                        />
                      </Link>
                      <i className="fa-regular fa-heart"></i>
                    </div>
                    <Link to={`/products/${item.id}`}>{item.name}</Link>
                    <h1>
                      {item.price} <span>₼</span>
                    </h1>
                    <button className="news_item_btn">Səbətə at</button>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="discount">
        <div className="container">
          <h4 className="discount_title">Endirimli məhsullar</h4>
          <div className="discount_items">
            {disc.map((item, index) => {
              if (index > 3) {
                return;
              } else {
                return (
                  <div key={index} className="news_item">
                    <div className="news_item_image">
                      <Link to={`/products/${item.id}`}>
                        <img
                          src={require(`../../../img/pages/Home/${item.images[0].path}`)}
                          alt=""
                        />
                      </Link>
                      <i className="fa-regular fa-heart"></i>
                    </div>
                    <Link to={`/products/${item.id}`}>{item.name}</Link>
                    <h1>
                      {item.price} <span>₼</span>
                    </h1>
                    <button className="news_item_btn">Səbətə at</button>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="Articles">
        <div className="container">
          <h5 className="Articles_title">Məqalələr</h5>
          <div className="Articles_items">
            {blog.map((item, index) => {
              if (index > 1) {
                return;
              } else {
                return (
                  <div key={index} className="Articles_item">
                    <div className="Articles_item_image">
                      <img
                        src={require(`../../../img/pages/Home/${item.blogImages[0].path}`)}
                        alt=""
                      />
                    </div>
                    <h6>{item.name}</h6>
                    <span>{item.blogImages[0].blog.createdAt}</span>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
