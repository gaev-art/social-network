import React from 'react';
import s from './Header.module.css';
import logo from './logo.png'


const Header = (props) => {
    return (
        <header className={s.header}>
            <img src={logo}/>
            </header>
    )
}

export default Header;
