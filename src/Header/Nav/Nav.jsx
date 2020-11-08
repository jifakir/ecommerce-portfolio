import React from 'react';

import './Nav.scss';
import NavItem from './NavItem/NavItem';



const Nav = () => {

    return (
        <div className="navigation">
            <NavItem />
            <NavItem />
            <NavItem />
            <NavItem />
            <NavItem />
        </div>
    )
}

export default Nav;