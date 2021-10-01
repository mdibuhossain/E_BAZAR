import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Cancel = <FontAwesomeIcon icon={faTimes} />;

const CartProductList = (props) => {
    const { key, category, name, price, url, seller } = props.cart;
    const { cancelOrderHandler } = props;
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
                        <button onClick={() => cancelOrderHandler(key)} className="regularBtn">{Cancel} Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProductList;