import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    const CartButton = props.children;
    console.log(CartButton);
    let totalOrder = 0;
    let totalPrice = 0;
    let shipping = 0;
    for (const product of cart) {
        // console.log(product.price, product.quantity);
        // if (!product.quantity)
        //     product.quantity = 1;
        shipping = Math.max(shipping, product.quantity && product.shipping);
        totalPrice += product.price * product.quantity;
        totalOrder += product.quantity;
    }
    // const shipping = (totalPrice > 0) ? 7.99 : 0;
    const priceBeforeTax = totalPrice + shipping;
    const tax = (totalPrice + shipping) * 0.01;
    const grandPrice = totalPrice + shipping + tax;
    return (
        <div className="car-container">
            <h2>Order  Summary</h2>
            <table className="card-table">
                <caption><p>Items Ordered: {totalOrder}</p></caption>
                <tbody>
                    <tr>
                        <td>Items</td>
                        <td></td><td></td><td></td><td></td>
                        <td>: ${totalPrice.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td></td><td></td><td></td><td></td>
                        <td>: ${shipping.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Total before Tax</td>
                        <td></td><td></td><td></td><td></td>
                        <td>: ${priceBeforeTax.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax</td>
                        <td></td><td></td><td></td><td></td>
                        <td>: ${tax.toFixed(2)}</td>
                    </tr>
                    <tr className="grand-price">
                        <td><strong>Grand Price</strong></td>
                        <td></td><td></td><td></td><td></td>
                        <td><strong>: ${grandPrice.toFixed(2)}</strong></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="6">{CartButton}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Cart;