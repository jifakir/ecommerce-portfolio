import React from 'react';
import { MdDelete } from 'react-icons/md';
import './Product.scss';


const Product = ({clicked, item}) => {

    const {image, price, title} = item;

    return (
        <div className="product">
            <div className="product-wrapper">
                <div className="left">
                    <div className="product-img">
                        <img src={image} alt="Brocolli"/>
                        <div className="delete-icon" onClick={clicked}>
                            <MdDelete />
                        </div>
                    </div>
                    <div className="product-details">
                        <h5 className="product-name">
                            {title}
                        </h5>
                        <h5 className="product-price">
                            $ {price}
                        </h5>
                    </div>
                </div>
                <div className="right">
                    <h4 className="total-price">
                        $ 50
                    </h4>
                    <div className="quantity">
                        5
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Product;