import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context';

const Login = () => {



    const [userCredentials, setUserCredentials] = useState(
        {
            username: "",
            password: ""
        }
    )
    //const [user, setUser] = useState({});
    //const [serverResponse, setServerResponse] = useState('');

    const navigate = useNavigate();

    const { currentUser, login } = useContext(AuthContext);

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

        login(data.username, data.password)
    };


    return (
        <div>
            <form>
                <input type="text" placeholder='username' name='username' onChange={handleUserInputs} />
                <input type="text" placeholder='password' name='password' onChange={handleUserInputs} />
                <button onClick={handleSubmit}>Click please</button>

            </form>

        </div>
    )
}

export default Login