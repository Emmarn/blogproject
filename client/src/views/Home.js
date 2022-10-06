import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context';


const Home = () => {

    const { currentUser, login } = useContext(AuthContext);

    const getLocalStorage = localStorage.getItem('jwt');
    console.log(getLocalStorage, " <-----------------")
    const navigate = useNavigate();

    const handleNav = () => {
        navigate("/login")
    }

    return (
        <div>
            <h1>Home</h1>
            {currentUser ? <h2>Welcome {currentUser.id}</h2> :
                <button onClick={handleNav}>Login</button>}
        </div>
    )
}

export default Home;