import React from 'react'
import { useState } from 'react'

const Register = () => {

    const url = "http://localhost:8000/api/auth/register"

    const [userCredentials, setUserCredentials] = useState(
        {
            username: "",
            password: "",
            email: ""
        }
    )

    const handleUserInputs = (e) => {

        console.log(e.target.name, " <-------------")
        setUserCredentials(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            username: userCredentials.username,
            password: userCredentials.password,
            email: userCredentials.email
        }


        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),

        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Server response:', data);

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <form>
                <input placeholder='username' onChange={handleUserInputs} name='username' />
                <input placeholder='password' onChange={handleUserInputs} name='password' />
                <input placeholder='email' onChange={handleUserInputs} name='email' />
                <button onClick={handleSubmit}>Register user</button>
            </form>
        </div>
    )

}

export default Register;