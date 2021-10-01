import React, { useState } from 'react';
import { clearTheCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProduct';

const ViewCart = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const purchaseHandler = () => {
        clearTheCart();
        setCart([]);
    }
    return (
        <div>
            <div className="shope-container">
                <div className="product-container">
                    <h1>Products review</h1>
                </div>
                <div>
                    <Cart cart={cart} purchaseHandler={purchaseHandler} />
                </div>
            </div>
        </div>
    );
};

export default ViewCart;