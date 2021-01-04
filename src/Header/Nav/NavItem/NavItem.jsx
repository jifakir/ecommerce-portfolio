import React from 'react';
import { Link } from 'react-router-dom';
import './NavItem.scss';



const NavItem = () => {
    const id = Array(5).fill().map((n, i) => i);
    return (
        <div className="nav-item">
            Navigation
            <div className="hoverable-cat">
                {id.map((n, i) => <Link key={i} className='item' to={`/collection/${i}`}>Item</Link>)}
            </div>
        </div>
    )
}

export default NavItem;