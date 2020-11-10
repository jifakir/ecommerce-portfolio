import React from 'react';
import {MdShoppingBasket} from 'react-icons/md'
import './ProductCard.scss';



const ProductCard = () => {

    
    return (
        <div className="product-card">
            <div className="img-wrapper">
                <img src="https://www.iloveorganicgirl.com/wp-content/uploads/2015/11/organicgirl-baby-arugula-5oz.png" alt="Product Pic"/>
                <i className="bucket-icon"><MdShoppingBasket /></i>
            </div>
            <h2 className="product-price">$ 0.5</h2>
            <h5 className="product-name">Organic Girl Baby Arugula <span className="quantity">100g</span></h5>
        </div>
    )
}

export default ProductCard;