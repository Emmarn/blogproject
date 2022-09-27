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

        <button className='kategorier' 
                onClick={onClickToKategori}>Antons blogg</button>

        <button className='kategorier' 
                onClick={onClickToKategori}>Emmas blogg</button>

        <button className='kategorier' 
                onClick={onClickToKategori}>Jaris blogg</button>

        <button className='kategorier' 
                onClick={onClickToKategori}>Olgas blogg</button>

        <button className='search' 
                onClick={onClickSearch}>Search</button>        

        <button className='loginButton' 
                onClick={onClickLogin}>Logga in</button>

</div>

        
    </div>
  );
};