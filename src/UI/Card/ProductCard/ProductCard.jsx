import React, { useContext } from 'react';
import {MdShoppingBasket} from 'react-icons/md';
import { CartContext } from '../../../Context/CartContext';
import './ProductCard.scss';



const ProductCard = ({item}) => {

    const {title, image, price} = item;
    
    const [cart, setCart] = useContext(CartContext);
    
    let hasItemInCart = cart.find(e=> e.id === item.id);
    
    return (
        <div className="product-card">
            <div className="img-wrapper">
                <img src={image} alt={title}/>
                <i className={hasItemInCart ? 'bucket-icon carted-style':'bucket-icon'} onClick={()=> setCart(prev => [...prev, item])}><MdShoppingBasket /></i>
            </div>
            <div className="desc-wrapper">
                <h2 className="product-price">$ {price}</h2>
                <h5 className="product-name">{title}<span className="quantity">100g</span></h5>
            </div>
        </div>
    )
}

export default ProductCard;