import React, { useContext, useState } from 'react';
import { FaShoppingBag, FaWindowClose } from 'react-icons/fa';
import { CartContext } from '../Context/CartContext';
import { DataContext } from '../Context/DataContext';

import './Cart.scss';
import Product from './Product/Product';


const Cart = (props) => {
    
    const [isCartOpen, setCartOpen] = useState(false);

    const [cart, setCart] = useContext(CartContext);
    const [data, setData] = useContext(DataContext);

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
                <div className="total-amount">
                    <h3>
                        Total Amount:
                    </h3>
                    <h3>{cart.map((e) => e.price).reduce((a, d) => a+d, 0)}</h3>
                </div>
            </div>
            <div className="products">
                    {cart.map((e,i) => <Product key={i} item={e} clicked={()=> deleteCartItem(i)} />)}
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