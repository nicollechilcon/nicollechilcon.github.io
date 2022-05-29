import { HashLink } from 'react-router-hash-link';
import close from '../../assets/icons/close.svg';
import logo from '../../assets/icons/logo.svg';
import menu from '../../assets/icons/menu.svg';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import clsx from 'clsx';
import './index.css';

export function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav>
      <div className="mobile-menu">
        <Link to="/">
          <img className="logo-img" src={logo} alt="logo"/>
        </Link>
        <button onClick={toggleMobileMenu} className="menu-btn">
          <img className={clsx(showMobileMenu ? 'close-img' : 'menu-img')} src={showMobileMenu ? close : menu} alt="menu" />
        </button>
      </div>

      <ul className={clsx(showMobileMenu && 'is-flex')}>
        <li>
          <HashLink to="/#projects">Projects</HashLink>
        </li>
        <li>
          <Link to="/about-me">About me</Link>
        </li>
        <li>
          <HashLink to="/#footer">Contact</HashLink>
        </li>
      </ul>
    </nav>
  );
}
