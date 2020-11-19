import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import ProductCard from '../UI/Card/ProductCard/ProductCard';

import './Collections.scss';


const Collections = () => {

    const item = useRouteMatch();

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
                                        {item.params.id}
                                    </h2>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="products">
                    {Array(10).fill().map((v,i)=><ProductCard />)}
                </div>
            </div>
        </div>
    )
}
export default Collections;