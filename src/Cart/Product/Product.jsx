import React from 'react';
import { MdDelete } from 'react-icons/md';
import './Product.scss';


const Product = ({clicked, name}) => {

    return (
        <div className="product">
            <div className="product-wrapper">
                <div className="left">
                    <div className="product-img">
                        <img src="https://cdn.shopify.com/s/files/1/0766/1101/products/Broccoli.JPG?v=1425932065" alt="Brocolli"/>
                        <div className="delete-icon" onClick={clicked}>
                            <MdDelete />
                        </div>
                    </div>
                    <div className="product-details">
                        <h5 className="product-name">
                            {name}
                        </h5>
                        <h5 className="product-price">
                            Price
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