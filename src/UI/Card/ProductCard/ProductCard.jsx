import React, { useContext } from 'react';
import {MdShoppingBasket} from 'react-icons/md';
import { CartContext } from '../../../Context/CartContext';
import './ProductCard.scss';



const ProductCard = ({item}) => {

    const {title, image, price} = item;
    
    const [cart, setCart] = useContext(CartContext);

    return (
        <div className="product-card">
            <div className="img-wrapper">
                <img src={image} alt={title}/>
                <i className="bucket-icon" onClick={()=> setCart(e => [...e, item])}><MdShoppingBasket /></i>
            </div>
            <h2 className="product-price">{price}</h2>
            <h5 className="product-name">{title}<span className="quantity">100g</span></h5>
        </div>
    )
}

export default ProductCard;