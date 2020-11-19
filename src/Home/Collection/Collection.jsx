import React from 'react';
import { Link } from 'react-router-dom';

import './Collection.scss';


const Collection = ({id}) => {

    return (
        <div className="collection-wrapper">
                <Link to={`/collection/${id}`}>
                    <div className="collection">
                        <div className="img-wrapper">
                                <img src="https://images.unsplash.com/photo-1510808052173-32bd048cc8f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Ctg Pic"/>
                        </div>
                        <div className="title-container">
                                <div className="title-wrapper">
                                    <h2 className="title">
                                        Oil
                                    </h2>
                                    <div className="btn-forward">
                                        View Items <span className="right-arrow">&#8594;</span>	
                                    </div>
                                </div>
                        </div>
                    </div>
                </Link>
        </div>
    )
}


export default Collection;