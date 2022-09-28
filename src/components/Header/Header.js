import React from 'react';
import logo from '../../images/code.png';
import './Header.css';

const Header = () => {
    return (
        <div className='flex items-center justify-center md:justify-start text-teal-500 font-bold text-2xl gap-3 mt-14 mb-12'>
            <img className='w-16 h-16' src={logo} alt="" />
            <h1>CODING ACADEMY</h1>
        </div>
    );
};

export default Header;