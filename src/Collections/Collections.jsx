import React, { useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { DataContext } from '../Context/DataContext';
import ProductCard from '../UI/Card/ProductCard/ProductCard';

import './Collections.scss';


const Collections = () => {

    const item = useRouteMatch();
    const [data, setData] = useContext(DataContext);
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
                    {data ? data.map((e, i) => <ProductCard key={i} item={e} />):'Product is loading...'}
                </div>
            </div>
        </div>
    )
}
export default Collections;