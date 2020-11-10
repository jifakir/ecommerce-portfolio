import React from 'react';
import ProductCard from '../UI/Card/ProductCard/ProductCard';
import Collection from '../Collections/Collection/Collection';

import './Home.scss';

const Home = () => {


    return (
        <div className="home">
            <div className="banner-wrapper">
                <div className="banner">
                    <img src="https://images.prismic.io/jamcart/53362f6b-a9fc-4cfe-81d8-45d7de33ebba_home-banner.png" alt="Banner"/>
                </div>
                <div className="title-container">
                    <div className="title-wrapper">
                        <h1 className="title">
                            Stay home, <br/>
                            & Get your daily need's
                        </h1>
                        <h5 className="subtitle">
                            Start your daily shipping with <span className='subtitle-bold'>Jamcart</span>
                        </h5>
                        <div className="btn-order">
                            Order Now
                        </div>
                    </div>
                </div>
            </div>
            <div className="collections-container">
                <Collection />
                <Collection />
                <Collection />
                <Collection />
                <Collection />
                <Collection />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default Home;