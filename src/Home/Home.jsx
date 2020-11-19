import React from 'react';
import ProductCard from '../UI/Card/ProductCard/ProductCard';
import Collection from './Collection/Collection';
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
                            Stay Home, <br/>
                            & Get your daily need's
                        </h1>
                        <h5 className="subtitle">
                            Start your daily shipping with <span className='subtitle-bold'>Jamcart</span>
                        </h5>
                        <div className="btn-order">
                            <a href='#featured' className='link'>
                                <p>Order Now &#8594;</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="collections-container">
                {
                    Array(6).fill().map((v, i) => <Collection id={i} />)
                }
                
            </div>
            <div id='featured' className="product-wrapper">
                <h1>Featured Product</h1>
                <div className="product-list">
                    {Array(30).fill().map(() => <ProductCard />)}
                </div>
            </div>
            <div className="product-wrapper">
                <h1>Latest Product</h1>
                <div className="product-list">
                    {Array(30).fill().map(() => <ProductCard />)}
                </div>
            </div>
        </div>
    )
}

export default Home;