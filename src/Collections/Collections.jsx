import React from 'react';
import ProductCard from '../UI/Card/ProductCard/ProductCard';

import './Collections.scss';


const Collections = () => {

    return (
        <div className="collections">
            <div className="container">
                <div className="collection-banner">
                    <div className="collection">
                        <div className="img-wrapper">
                                <img src="https://images.unsplash.com/photo-1510808052173-32bd048cc8f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Ctg Pic"/>
                        </div>
                        <div className="title-container">
                                <div className="title-wrapper">
                                    <h2 className="title">
                                        Oil
                                    </h2>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="products">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    )
}
export default Collections;