import { useState, useEffect } from "react";
import { URL } from "../Constants.js";
import ItemList from "./ItemList";
import "./Body.css";
import { Link } from "react-router-dom";

const Body = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProductSpecification();
  }, []);

  const getProductSpecification = async () => {
    const data = await fetch(URL);
    const json = await data.json();
    setProduct(json);
    console.log(json);
  };

  return (
    <div className="body-container">
      <div className="clothes-list">
        {product.map((item) => (
          <Link
            to={"/clothes/" + item.id}
            key={item.id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ItemList {...item} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
