import { useEffect, useState } from "react"
import { getStoredCart } from '../utilities/fakedb';

const useCart = (products) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storeCart = [];
            for (const key in savedCart) {
                const addedProducts = products.find(product => product.key === key);
                if (addedProducts) {
                    const quantity = savedCart[key];
                    addedProducts.quantity = quantity;
                    storeCart.push(addedProducts);
                }
            }
            setCart(storeCart);
        }
    }, [products])
    return [cart, setCart];
}

export default useCart;