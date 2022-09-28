import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.css';


export const Header = () => {
        

  return (
    <div className='header'>
        <Link className='blogname' to={'/'}>B L O G G   N A M N</Link>

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

        <Link className='search' to={''}>
                Search...
        </Link>

        <Link className='loginButton' to={'/login'}>
                Logga in
        </Link>

</div>
</div>

        
    </div>
  );
};