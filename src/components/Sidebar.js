import React from 'react';
import styles from './Sidebar.css';
import { slide as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";


 const Sidebar = () => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Hem
      </a>

      <a className="menu-item" href="./Bloggers.js">
        Våra bloggare
      </a>

      <Link to={'/login'}>Skriv ett inlägg</Link>

      <a className="menu-item" href="./Blogpost.js">
        Annat exempel
      </a>
    </Menu>
  );
};

export default Sidebar;