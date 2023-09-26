import React from "react";
import "./Footer.css";
import { data } from "./mocData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
const Footer = () => {
  const sliderLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 200;
  };
  const sliderRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 200;
  };
  return (
    <>
      <div className="footer_top">
        <div className="container">
          <div className="footer_top_item">
            <p>Biz qəbul edirik</p>
            <div className="relative flex items-center">
              <MdChevronLeft onClick={sliderLeft} size={40} />
              <div
                id="slider"
                className="w-[1000px] h-full overflow-hidden scroll-smooth whitespace-nowrap"
              >
                {data.map((item, index) => (
                  <img
                    key={index}
                    className="w-[120px] inline-block p-2"
                    src={item.img}
                    alt="/"
                  />
                ))}
              </div>
              <MdChevronRight onClick={sliderRight} size={40} />
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="footer_bottom_item">
            <p>Abunə</p>
            <form action="#">
              <input type="email" id="email" />
              <button>Abunə ol</button>
            </form>
          </div>
          <div className="footer_bottom_item"></div>
          <div className="footer_bottom_item"></div>
          <div className="footer_bottom_item"></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
