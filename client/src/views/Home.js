import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    const handleNav = () => {
        navigate("/login")
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleNav}>Login</button>
        </div>
    )
}

export default Home