import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.css';


export const Header = () => {
        //const navigate=useNavigate();

    const onClickToKategori=()=>{};
    const onClickSearch=()=>{};
    const onClickLogin = () => {};

  return (
    <div className='header'>
        <div className='blogname'>B L O G G   N A M N</div>

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

        <Link className='search' to={''}>
                Search
        </Link>

        <Link className='loginButton' to={'/login'}>
                Logga in
        </Link>

</div>

        
    </div>
  );
};