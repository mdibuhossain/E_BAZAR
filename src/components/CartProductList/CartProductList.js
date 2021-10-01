import React from 'react';

const CartProductList = (props) => {
    const { category, name, price, url, seller } = props.cart;
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProductList;