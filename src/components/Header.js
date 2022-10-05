import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.css';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';


export const Header = () => {
        

  return (
    <div className='header'>
        <Sidebar/>
        <Link className='blogname' to={'/'}>BLOGG</Link>

        <div className='container'>

    <div className='kategorieBlock'>

        <Link className='kategorier' to={'/antonsblog'}>
                Antons blogg
        </Link>

        <Link className='kategorier' to={'/emmasblog'}>
                Emmas blogg
        </Link>

        <Link className='kategorier' to={'/jarisblog'}>
                Jaris blogg
        </Link>

        <Link className='kategorier' to={'/olgasblog'}>
                Olgas blogg
        </Link>
        </div>

        <div className='searchLoginBlock'>

        <SearchBar/>

        <Link className='loginButton' to={'/login'}>
                Add post
        </Link>

</div>
</div>

        
    </div>
  );
};