import React from 'react';
import { FaFacebookSquare, FaYoutube, FaInstagram  } from 'react-icons/fa';

import './Footer.scss';


const Footer = () => {


    return (
        <footer className='footer'>
            <div className="copyright">
                <p>
                    &copy; Coded by <a href="http://jifakir.github.io/" target="_blank" rel="noopener noreferrer">jifakir</a>
                </p>
            </div>
            <div className="icon-wrapper">
                <div className="icon facebook">
                    <FaFacebookSquare />
                </div>
                <div className="icon youtube">
                    <FaYoutube />
                </div>
                <div className="icon instagram">
                    <FaInstagram />
                </div>
            </div>
        </footer>
    )
}

export default Footer;