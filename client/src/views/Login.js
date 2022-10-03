import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'




const Login = () => {

    const url = 'http://localhost:8000/api/auth/login';

    const [userCredentials, setUserCredentials] = useState(
        {
            username: "",
            password: ""
        }
    )
    const [serverResponse, setServerResponse] = useState('');

    const navigate = useNavigate();

    const handleUserInputs = (e) => {

        console.log(e.target.name, " <-------------")
        setUserCredentials(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            username: userCredentials.username,
            password: userCredentials.password
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
    };


    return (
        <div>
            <form>
                <input type="text" placeholder='username' name='username' onChange={handleUserInputs} />
                <input type="text" placeholder='password' name='password' onChange={handleUserInputs} />
                <button onClick={handleSubmit}>Click please</button>
            </form>
            {serverResponse && <p>{serverResponse}</p>}
        </div>
    )
}

export default Login