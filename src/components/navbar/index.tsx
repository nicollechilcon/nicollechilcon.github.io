import logo from '../../assets/icons/logo.svg'
import menu from '../../assets/icons/menu.svg'
import { Link } from 'react-router-dom';
import React from 'react';
import './index.css';

export function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="logo"/>
      </Link>
      <button className="menu-btn">
        <img src={menu} alt="menu" />
      </button>

      <ul>
        <li>
          <Link to="/">Projects</Link>
        </li>
        <li>
          <Link to="/about-me">About me</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
