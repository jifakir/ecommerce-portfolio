import React, { useContext} from 'react';
import { CartContext } from '../Context/CartContext';
import { DataContext } from '../Context/DataContext';
import ProductCard from '../UI/Card/ProductCard/ProductCard';
import Collection from './Collection/Collection';
import './Home.scss';

const Home = () => {

    const [data, setData] = useContext(DataContext);
    console.log(data);


    return (
        <div className="home">
            <div className="banner-wrapper">
                <div className="banner">
                    <img src={null} alt="Banner"/>
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
                    data ? data.map((e, i) => <ProductCard key={i} item={e} />):'Product is loading...'
                }
                
            </div>
            <div id='featured' className="product-wrapper">
                <h1>Featured Product</h1>
                <div className="product-list">
                    {data ? data.map((e, i) => <ProductCard key={i} item={e} />):'Product is loading...'}
                </div>
            </div>
            <div className="product-wrapper">
                <h1>Latest Product</h1>
                <div className="product-list">
                    {data ? data.map((e, i) => <ProductCard key={i} item={e} />):'Product is loading...'}
                </div>
            </div>
        </div>
    )
}

export default Home;