import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './Shope.css';
import { NavLink, useHistory } from 'react-router-dom';

const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />

const Shope = () => {
    const [products, setProducts] = useState([]);
    const [searchProducts, setSearchProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [itemPrice, setItemPrice] = useState(0);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setSearchProducts(data);
            });
    }, []);

    useEffect(() => {
        if (products.length) {
            const savedData = getStoredCart();
            // console.log(savedData);
            const newLoadCart = [];
            for (const key in savedData) {
                const findData = products.find(product => product.key === key);
                if (findData) {
                    const quantity = savedData[key];
                    findData.quantity = quantity;
                    newLoadCart.push(findData);
                }
            }
            setCart(newLoadCart);
            // console.log(newLoadCart);
        }
    }, [products]);

    const searchHandler = (event) => {
        const searchValue = event.target.value;
        const selectedProducts = products.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()));
        setSearchProducts(selectedProducts);
    }

    const addProductHandler = product => {
        const newCart = [...cart];
        const quantityCheck = cart.find(c => c.key === product.key);
        if (quantityCheck) {
            product.quantity += 1;
            console.log(products);
        }
        else {
            product.quantity = 1;
            newCart.push(product);
        }
        setCart(newCart);
        setItemPrice(product.price);
        addToDb(product.key);
    }
    const history = useHistory();

    const visitReviewHandler = () => {
        history.push("/view-cart");
        // clearTheCart();
        // setCart([]);
    }

    return (
        <div>
            <div className="search-box">
                <input onChange={searchHandler} type="text" placeholder="Type here to search" />
                <span className="cart-icon">&nbsp;&nbsp;<NavLink to="/view-cart">{shoppingCart} {cart.length}</NavLink></span>
            </div>
            <div className="shope-container">
                <div className="product-container">
                    {
                        searchProducts.map(product => <Product
                            key={product.key}
                            addProductHandler={addProductHandler}
                            product={product}>
                        </Product>)
                    }
                </div>
                <div>
                    <Cart cart={cart}>
                        <button onClick={visitReviewHandler} className="regularBtn">Review Order</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shope;