import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import "./Product.css";
import ControlledText from "react-controlled-text";

const Product = ({ product }) => {
  return (
    //  <Card className='my-3 p-3 rounded'>
    //    <Link to={`/product/${product._id}`}>
    //      <Card.Img src={product.image} variant='top' />
    //    </Link>

    //    <Card.Body>
    //      <Link to={`/product/${product._id}`}>
    //        <Card.Title as='div'>
    //          <strong>{product.name}</strong>
    //        </Card.Title>
    //      </Link>

    //      <Card.Text as='div'>
    //        <Rating
    //          value={product.rating}
    //          text={`${product.numReviews} reviews`}
    //        />
    //      </Card.Text>

    //      <Card.Text as='h3'>${product.price}</Card.Text>
    //    </Card.Body>
    //  </Card>
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
            <h5 className="cards__item__text">{product.name}</h5>
            <h6 className="cards__item__text">{product.price}</h6>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </div>
        </Link>
      </li>
    </>
  );
};

export default Product;
