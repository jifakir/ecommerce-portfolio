import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../../Context/DataContext';
import './NavItem.scss';



const NavItem = () => {

    const id = Array(5).fill().map((n, i) => i);
    const [data, setData] = useContext(DataContext);
    const categories = data?[...new Set(data.map((e)=> e.category))]:null;

    return (
        <div className="nav-item">
            Navigation
            <div className="hoverable-cat">
                {categories?categories.map((el, i) => <Link key={i} className='item' to={`/collection/${el.toLowerCase().replace(/\s+/g,'')}`}>{el}</Link>):null}
            </div>
        </div>
    )
}

export default NavItem;