import React from 'react';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import './Header.css';


const Header = () => {
    return (
        <header className="Header">
          <Logo />
          <Menu />  
        </header>
    );
}

export default Header;