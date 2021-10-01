import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import Rating from 'react-rating';

const shoppingCartIcon = <FontAwesomeIcon icon={faShoppingCart} />

const Product = (props) => {
    const { category, name, img, price, stock, url, seller, star } = props.product;
    // console.log(props.product);
    return (
        <div className="product">
            <div className="product-img-container">
                <img src={img} alt="Product" />
            </div>
            <div className="product-details">
                <a href={url} target="_blank" rel="noreferrer" className="product-name">
                    <h3>{name}</h3>
                </a>
                <div className="product-sub-details">
                    <div>
                        <small>By: {seller}</small><br />
                        <small>Category: {category}</small>
                        <h2>${price}</h2>
                        <p>only {stock} left in stock - order soon</p>
                        <button onClick={() => props.addProductHandler(props.product)} className="btn-regular">{shoppingCartIcon} Add to cart</button>
                    </div>
                    <div>
                        <Rating
                            initialRating={star}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            readonly
                            className="rating"
                        ></Rating> <span>({star}/{5})</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;