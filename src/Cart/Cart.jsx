import React, { useContext, useState } from 'react';
import { FaShoppingBag, FaWindowClose } from 'react-icons/fa';
import { CartContext } from '../Context/CartContext';

import './Cart.scss';
import Product from './Product/Product';


const Cart = () => {

    const [isCartOpen, setCartOpen] = useState(false);

    const [cart, setCart] = useContext(CartContext);

    const cartOpenHandler = () => {
        setCartOpen(!isCartOpen);
    };

    const checkoutHandler = () => {
        return alert("Checkout doesn't available yet")
    }
    const deleteCartItem = (index) => {
        
        setCart((prevCart) => [...prevCart].filter((v,i)=> i !== index));
    }
    const shortCart = (
        <div className="short-cart" onClick={cartOpenHandler}>
                <div className="short-cart-wrapper">
                    <div className="left">
                        <div className="icon">
                            <FaShoppingBag />
                        </div>
                        <h5>
                            Added {cart.length} Items
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
                    {cart.map((product, i) => <Product name={i} clicked={()=> deleteCartItem(i)} />)}
            </div>
            <div className="checkout" onClick={checkoutHandler}>
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