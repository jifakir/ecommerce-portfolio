import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';

import './Cart.scss';
import Product from './Product/Product';


const Cart = () => {


    return (
        <div className="cart">
            <div className="short-cart">
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
            <header className="cart-header">
                <h4>Cart</h4>
                <h4 className="cross">
                    X
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
}

export default Cart;