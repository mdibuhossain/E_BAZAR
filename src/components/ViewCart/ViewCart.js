import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { addToDb, clearTheCart, deleteFromDb, getStoredCart, updateDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import CartProductList from '../CartProductList/CartProductList';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProduct';

const ViewCart = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();

    useEffect(() => {
        console.log('qnt');
    }, [cart])

    const purchaseHandler = () => {
        if (cart.length)
            history.push("/complete-order");
        clearTheCart();
        setCart([]);
    }
    const cancelOrderHandler = (key) => {
        const updateCart = cart.filter(product => product.key !== key);
        setCart(updateCart);
        deleteFromDb(key);
    }

    const HandleAddProduct = (key) => {
        const storedCart = getStoredCart();
        const tmpCart = [...cart];
        for (const product of tmpCart) {
            if (product.key === key) {
                ++storedCart[key];
                product.quantity = storedCart[key];
                console.log(product);
            }
        }
        setCart(tmpCart);
        updateDb(storedCart);
    }

    const HandleSubtractProduct = (key) => {
        const storedCart = getStoredCart();
        const tmpCart = [...cart];
        for (const product of tmpCart) {
            if (product.key === key) {                
                storedCart[key] && --storedCart[key];
                product.quantity = storedCart[key];
                console.log(product);
            }
        }
        setCart(tmpCart);
        updateDb(storedCart);
    }

    return (
        <div>
            <div className="shope-container">
                <div className="product-container">
                    {
                        cart.map(selectedProduct => <CartProductList
                            key={selectedProduct.key}
                            cart={selectedProduct}
                            cancelOrderHandler={cancelOrderHandler}
                            HandleAddProduct={HandleAddProduct}
                            HandleSubtractProduct={HandleSubtractProduct}
                            products={products}
                        />)
                    }
                </div>
                <div>
                    <Cart cart={cart}>
                        <button onClick={purchaseHandler} className="regularBtn">Purchase</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default ViewCart;