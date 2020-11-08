import React from 'react';

import './Header.scss';
import Nav from './Nav/Nav';


const Header = () => {


    return (
        <div className="header">
            <div className="sticky-outer">
                <div className="logo-wrapper">ECOMMERCE</div>
                <div className="search-account-wrapper">
                    <div className="search-box">
                        Search Box
                    </div>
                    <div className="account">
                        Account
                    </div>
                </div>
            </div>
            <nav className="navigation-wrapper">
                <Nav />
            </nav>
        </div>
    )
}

export default Header;