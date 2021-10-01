import { clearTheCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import CartProductList from '../CartProductList/CartProductList';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProduct';
import Product from '../Product/Product';

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
                    {
                        cart.map(selectedProduct => <CartProductList key={selectedProduct.key} cart={selectedProduct} />)
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