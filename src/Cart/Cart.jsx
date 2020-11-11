import React, { useState } from 'react';
import { FaShoppingBag, FaWindowClose } from 'react-icons/fa';

import './Cart.scss';
import Product from './Product/Product';


const Cart = () => {

    const [isCartOpen, setCartOpen] = useState(false);

    const cartOpenHandler = () => {
        setCartOpen(!isCartOpen);
    }
    const shortCart = (
        <div className="short-cart" onClick={cartOpenHandler}>
                <div className="short-cart-wrapper">
                    <div className="left">
                        <div className="icon">
                            <FaShoppingBag />
                        </div>
                        <h5>
                            Added 1 Items
                        </h5>
                    </div>
                    <div className="right">
                        <h5 className="amount">
                            $2.95
                        </h5>
                    </div>
                </div>
            </div>
    );

    const fullCart = (
        <div className="cart-wrapper">
            <header className="cart-header">
                <h4>Cart</h4>
                <h4 className="cross" onClick={cartOpenHandler}>
                    <FaWindowClose />
                </h4>
            </header>
            <div className="total-amount-wrapper">
                <h3 className="total-amount">
                    Total Amount
                </h3>
            </div>
            <div className="products">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
            </div>
            <div className="checkout">
                Proceed to Checkout
            </div>
        </div>
    )
    return (
        <div className="cart">
            {
                isCartOpen? fullCart : shortCart
            }
        </div>
    )
}

export default Cart;