import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={`/product/${product._id}`}>
          <figure
            className="cards__item__pic-wrap"
            data-category={product.category}
          >
            <img
              className="cards__item__img"
              alt={product.description}
              src={product.image}
            />
          </figure>
          <div className="cards__item__info">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
            <h5 className="cards__item__text">{product.name}</h5>
            <h6 className="cards__item__text">{product.price}</h6>
          </div>
        </Link>
      </li>
    </>
  );
};

export default Product;
