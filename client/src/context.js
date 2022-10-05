import { createContext, useState } from "react";


export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {

    let getLocalStorage = localStorage.getItem("jwt")



    const [currentUser, setCurrentUser] = useState();



    const login = async (username, password) => {

        const url = 'http://localhost:8000/api/auth/';

        const loginUser = async (username, password) => {

            await fetch(url + "login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: username, password: password }),

            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data, " we never get hrere=");
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

        }
        const verifyUser = async () => {

            await fetch(url + "verify", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ localStorage: getLocalStorage }),

            })
                .then((response) => response.json())
                .then((data) => {
                    setCurrentUser(data);

                })
                .catch((error) => {
                    console.error('Error:', error);
                });

        }
        loginUser(username, password).then(console.log(localStorage.getItem("jwt")))

        console.log(currentUser, "vvvv")

        // console.log("Now we are here -<-<--")

        // if (!getLocalStorage) {
        //     console.log("Now we are here -<-<-- 2 2 2 2")
        //     let getJwtToken = await fetch(url + "login", {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ username: username, password: password }),

        //     })
        //         .then((response) => response.json())
        //         .then((data) => {
        //             localStorage.setItem("jwt", data);

        //         })
        //         .catch((error) => {
        //             console.error('Error:', error);
        //         });

        //     console.log(getJwtToken, " do we get rtoken?")
        // }

        // console.log(getLocalStorage, " This is ls")

        // let response = await fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ localStorage: getLocalStorage }),

        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         setCurrentUser(setCurrentUser(data));

        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });

        // console.log(response, "ress")

        // console.log(currentUser, " curr user")
    }

    const logout = async () => {

    }
    console.log(currentUser, " current user")

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}