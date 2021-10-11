import React from 'react';
import './CartProductList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';

const Cancel = <FontAwesomeIcon icon={faTimes} />;

const CartProductList = (props) => {
    const [qnt, setQnt] = useState(0);
    const { key, category, name, price, url, seller, quantity } = props.cart;
    const { cancelOrderHandler, HandleAddProduct, HandleSubtractProduct } = props;

    useEffect(() => {
        setQnt(quantity);
    }, [quantity])

    return (
        <div className="product">
            <div className="product-details">
                <a href={url} target="_blank" rel="noreferrer" className="product-name">
                    <h3>{name}</h3>
                </a>
                <div className="product-sub-details">
                    <div>
                        <small>By: {seller}</small><br />
                        <small>Category: {category}</small>
                        <h2>${price}</h2>
                        <div className="counting-box">
                            <button onClick={() => { HandleSubtractProduct(key) }}><i className="fas fa-angle-left"></i></button>
                            <span className="count-display">{qnt}</span>
                            <button onClick={() => { HandleAddProduct(key) }}><i className="fas fa-angle-right"></i></button>
                        </div>
                        <button onClick={() => cancelOrderHandler(key)} className="regularBtn">{Cancel}  Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProductList;