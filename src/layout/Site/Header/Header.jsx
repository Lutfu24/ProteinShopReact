import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [openmenu, setOpenmenu] = useState(false);
  const toggleIsLoading = () => {
    setOpenmenu((current) => !current);
  };

  const copyUser = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <nav className="top_nav">
        <div className="container">
          <div className="top_nav_item">
            <ul>
              <li>
                <a href="#">Məqalələr</a>
              </li>
              <li>
                <a href="#">Çatdırılma</a>
              </li>
              <li>
                <Link to="/brands">Brendlər</Link>
              </li>
              <li>
                <a href="#">Əlaqə</a>
              </li>
            </ul>
            <ul>
              <li>
                {copyUser === null ? (
                  <Link to={"/user/login"}>Qeydiyyat</Link>
                ) : (
                  <Link to={"/user"}>{copyUser.userName}</Link>
                )}
              </li>
              <li>
                <a href="#">Seçilmişlər</a>
              </li>
              <li>
                <a href="#">Az</a>
              </li>
              <li>
                <a href="#">Azn(m)</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="Header">
        <div className="container">
          <div className="header">
            <div>
              <Link to={"/"}>
                <img src={require("../../../img/Site/Header/Logotip.png")} />
              </Link>
            </div>
            <div>
              <div className="times">
                <i className="fa-regular fa-clock"></i>
                <div>
                  <span>Mağazanın iş qrafiki:</span>
                  <h6>Hər gün: 11:00-dan 21:00-dək</h6>
                </div>
              </div>
            </div>
            <div>
              <div className="adress">
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Ünvan 1: N.Nərimanov m/s, Təbriz küçəsi, 116</h6>
                </div>
              </div>
            </div>
            <div>
              <div className="phones">
                <i className="fa-brands fa-whatsapp"></i>
                <div>
                  <h6>+994 55 670 75 95</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container">
          <div className="header_bottom_item">
            <div onClick={toggleIsLoading} className="header_bottom_menu">
              <i className="fa-solid fa-bars"></i>
              <h6 className="header_bottom_h6">Menyu</h6>
            </div>
            {openmenu && (
              <div className="menu">
                <ul className="menu_ul">
                  <li>
                    <Link to={"catalog/idman-qidaları"}>
                      <p className="menu_link">İdman qidaları</p>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <p className="menu_link">Aksesuarlar</p>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <p className="menu_link">Geyimlər</p>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <p className="menu_link">
                        İdman Alətləri və Avadanlıqları
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <p className="menu_link">
                        Məşq hərəkətləri / proqramları
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <p className="menu_link">Qidalanma</p>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <p className="menu_link">Sağlamlıq</p>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <p className="menu_link">Atletlərimiz</p>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            <div className="sport_food">
              <ul className="menu_ul">
                <li>
                  <Link to={"catalog/idman-qidaları"}>
                    <p className="menu_link">İdman qidaları</p>
                  </Link>
                </li>
                <li>
                  <Link>
                    <p className="menu_link">Aksesuarlar</p>
                  </Link>
                </li>
                <li>
                  <Link>
                    <p className="menu_link">Geyimlər</p>
                  </Link>
                </li>
                <li>
                  <Link>
                    <p className="menu_link">İdman Alətləri və Avadanlıqları</p>
                  </Link>
                </li>
                <li>
                  <Link>
                    <p className="menu_link">Məşq hərəkətləri / proqramları</p>
                  </Link>
                </li>
                <li>
                  <Link>
                    <p className="menu_link">Qidalanma</p>
                  </Link>
                </li>
                <li>
                  <Link>
                    <p className="menu_link">Sağlamlıq</p>
                  </Link>
                </li>
                <li>
                  <Link>
                    <p className="menu_link">Atletlərimiz</p>
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="header_bottom_item_ul">
              <li>
                <Link to={"catalog/proteinlər"}>Protein</Link>
              </li>
              <li>
                <Link to={"catalog/gainerlər"}>Gainer</Link>
              </li>
              <li>
                <Link to={"catalog/aminoturşular"}>Amino</Link>
              </li>
              <li>
                <Link to={"catalog/kreatinlər"}>Kreatin</Link>
              </li>
              <li>
                <Link to={"catalog/vitamins-and-minerals"}>
                  Vitamin/Mineral
                </Link>
              </li>
              <li>
                <Link to={"catalog/yağ-yandıranlar"}>Arıqladıcı</Link>
              </li>
              <li>
                <Link to={"catalog/bcaa"}>BCAA</Link>
              </li>
              <li>
                <a href="#">Energetik</a>
              </li>
            </ul>
            <form action="">
              <input
                className="header_bottom_input"
                type="search"
                id="bottom"
                placeholder="Məhsul axtarışı"
              ></input>
              <a href="#" className="header_bottom_a">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </form>
            <Link to="/cart">
              <div className="header_bottom_shop">
                <i className="fa-solid fa-cart-shopping"></i>
                <div>
                  <span>Səbət</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
