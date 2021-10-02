import { useHistory } from 'react-router';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import CartProductList from '../CartProductList/CartProductList';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProduct';

const ViewCart = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();
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
    return (
        <div>
            <div className="shope-container">
                <div className="product-container">
                    {
                        cart.map(selectedProduct => <CartProductList key={selectedProduct.key} cancelOrderHandler={cancelOrderHandler} cart={selectedProduct} />)
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