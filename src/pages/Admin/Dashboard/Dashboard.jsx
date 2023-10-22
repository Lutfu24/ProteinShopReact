import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5240/api/Products/GetAll").then((res) => {
      setPosts(res.data.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    axios
                      .post("http://localhost:5240/api/Products/Add", {
                        name: prompt("name"),
                        price: prompt("price"),
                        discount: prompt("discount"),
                        raiting: prompt("raiting"),
                        description: prompt("description"),
                        isAvailability: true,
                        brandId: prompt("brand id"),
                        catalogId: prompt("catalog id"),
                      })
                      .then((res) => toast.success("product added"));
                  }}
                >
                  Add
                </button>
              </th>
              <th scope="col">Read</th>
              <th scope="col">Delete</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">
                    {item.images.length !== 0 ? (
                      <img
                        src={require(`../../../img/pages/Home/${item.images[0].path}`)}
                        width={"50px"}
                        height={"50px"}
                      />
                    ) : null}
                  </th>
                  <td>{item.name}</td>
                  <td></td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => {
                        navigate(`/products/${item.id}`);
                      }}
                    >
                      Read
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        axios
                          .delete(
                            `http://localhost:5240/api/Products/DeleteById?id=${item.id}`
                          )
                          .then((res) => toast.success("item deleted"));
                      }}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        axios
                          .put("http://localhost:5240/api/Products/Update", {
                            id: prompt("id", `${item.id}`),
                            name: prompt("name", `${item.name}`),
                            price: prompt("price", `${item.price}`),
                            discount: prompt("discount", `${item.discount}`),
                            raiting: prompt("raiting", `${item.raiting}`),
                            description: prompt(
                              "description",
                              `${item.description}`
                            ),
                            isAvailability: prompt(
                              "is availability",
                              `${item.isAvailability}`
                            ),
                            isFavorite: prompt(
                              "is favorite",
                              `${item.isFavorite}`
                            ),
                            isBestSeller: prompt(
                              "is best seller",
                              `${item.isBestSeller}`
                            ),
                            isNew: prompt("is new", `${item.isNew}`),
                            brandId: prompt("brand id", `${item.brandId}`),
                            catalogId: prompt(
                              "catalog id",
                              `${item.catalogId}`
                            ),
                          })
                          .then((res) => {
                            toast.success("product uptaded");
                          });
                      }}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Toaster />
      </div>
    </div>
  );
};

export default Dashboard;
