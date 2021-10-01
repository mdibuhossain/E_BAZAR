import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import CartProductList from '../CartProductList/CartProductList';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProduct';

const ViewCart = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const purchaseHandler = () => {
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
                    <Cart cart={cart} purchaseHandler={purchaseHandler} />
                </div>
            </div>
        </div>
    );
};

export default ViewCart;