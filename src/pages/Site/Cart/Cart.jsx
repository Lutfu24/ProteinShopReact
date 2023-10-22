import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [cartitems, setCartitems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5240/api/CartItems/GetAll").then((res) => {
      console.log(res.data.data);
      setCartitems(res.data.data);
    });
  }, []);
  return (
    <div className="cart_section">
      <div className="container">
        <div className="cart">
          <h1>Səbət</h1>
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">Məhsul</th>
                <th scope="col">Qiymət</th>
                <th scope="col">Sayı</th>
                <th scope="col">Toplam</th>
              </tr>
            </thead>
            <tbody>
              {cartitems.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.productName}</td>
                    <td>
                      {item.price} <span>₼</span>
                    </td>
                    <td>{item.count}</td>
                    <td>
                      {item.price * item.count} <span>₼</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
