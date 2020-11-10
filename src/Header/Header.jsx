import React from 'react';
import { MdAccountCircle, MdSearch } from 'react-icons/md';
import './Header.scss';
import Nav from './Nav/Nav';


const Header = () => {


    return (
        <div className="header">
            <div className="sticky-outer">
                <div className="logo-wrapper">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUAh0G1oQYmxCJIUsSO3CHm550itG_Bc2GNw&usqp=CAU" alt="Logo"/>
                </div>
                <div className="search-account-wrapper">
                    <div className="search-box">
                        <MdSearch className='icon' />
                        <input className='input-field' type="text"/>
                    </div>
                    <div className="account">
                        <MdAccountCircle />
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