import React from 'react';
import ProductCard from '../UI/Card/ProductCard/ProductCard';
import Collection from './Collection/Collection';

import './Collections.scss';


const Collections = () => {

    return (
        <div className="collections">
            <div className="container">
                <div className="collection-banner">
                    <Collection />
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