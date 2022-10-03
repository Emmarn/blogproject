import React from 'react';
import styles from './Sidebar.css';
import { slide as Menu } from 'react-burger-menu';


 const Sidebar = () => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Hem
      </a>

      <a className="menu-item" href="./Bloggers.js">
        Våra bloggare
      </a>

      <a className="menu-item" href="./CreateBlogPost.js">
        Skriv ett inlägg
      </a>

      <a className="menu-item" href="./Blogpost.js">
        Annat exempel
      </a>
    </Menu>
  );
};

export default Sidebar;