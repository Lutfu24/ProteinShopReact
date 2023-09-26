import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [openmenu, setOpenmenu] = useState(false);
  const toggleIsLoading = () => {
    setOpenmenu((current) => !current);
  };
  return (
    <>
      <nav className={styles.top_nav}>
        <div className="container">
          <div className={styles.top_nav_item}>
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
                <a href="#">Qeydiyyat</a>
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
      <div className={styles.Header}>
        <div className="container">
          <div className={styles.header}>
            <div>
              <img src={require("../../../img/Site/Header/Logotip.png")} />
            </div>
            <div>
              <div className={styles.times}>
                <i className="fa-regular fa-clock"></i>
                <div>
                  <span>Mağazanın iş qrafiki:</span>
                  <h6>Hər gün: 11:00-dan 21:00-dək</h6>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.adress}>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Ünvan 1: N.Nərimanov m/s, Təbriz küçəsi, 116</h6>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.phones}>
                <i className="fa-brands fa-whatsapp"></i>
                <div>
                  <h6>+994 55 670 75 95</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.header_bottom}>
        <div className="container">
          <div className={styles.header_bottom_item}>
            <div
              onClick={toggleIsLoading}
              className={styles.header_bottom_menu}
            >
              <i className="fa-solid fa-bars"></i>
              <h6 className={styles.header_bottom_h6}>Menyu</h6>
            </div>
            {openmenu && (
              <div className={styles.menu}>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                </ul>
              </div>
            )}
            <ul>
              <li>
                <a href="#">Protein</a>
              </li>
              <li>
                <a href="#">Gainer</a>
              </li>
              <li>
                <a href="#">Amino</a>
              </li>
              <li>
                <a href="#">Kreatin</a>
              </li>
              <li>
                <a href="#">Vitamin/Mineral</a>
              </li>
              <li>
                <a href="#">Arıqladıcı</a>
              </li>
              <li>
                <a href="#">BCAA</a>
              </li>
              <li>
                <a href="#">Energetik</a>
              </li>
            </ul>
            <form action="">
              <input
                className={styles.header_bottom_input}
                type="text"
                id="bottom"
                placeholder="Məhsul axtarışı"
              ></input>
              <a href="#" className={styles.header_bottom_a}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </form>
            <div className={styles.header_bottom_shop}>
              <i className="fa-solid fa-cart-shopping"></i>
              <div>
                <span>Səbət</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
