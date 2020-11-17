import React, { useContext } from 'react';
import {MdShoppingBasket} from 'react-icons/md'
import { CartContext } from '../../../Context/CartContext';
import './ProductCard.scss';



const ProductCard = () => {

    const [cart, setCart] = useContext(CartContext);
    const cartHandler = () => {
            setCart((prevCart)=> [...prevCart, {name:'Product', price: '$50'}])
    };
    return (
        <div className="product-card">
            <div className="img-wrapper">
                <img src="https://www.iloveorganicgirl.com/wp-content/uploads/2015/11/organicgirl-baby-arugula-5oz.png" alt="Product Pic"/>
                <i className="bucket-icon" onClick={cartHandler}><MdShoppingBasket /></i>
            </div>
            <h2 className="product-price">$ 0.5</h2>
            <h5 className="product-name">Organic Girl Baby Arugula <span className="quantity">100g</span></h5>
        </div>
    )
}

export default ProductCard;