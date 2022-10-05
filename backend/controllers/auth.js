import db from '../db.js';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import jwt from "jsonwebtoken";



export async function register(req, res) {

    //kolla om användare finns
    const query = "SELECT * FROM users WHERE username = $1::TEXT OR email = $2::TEXT";
    const values = [req.body.username, req.body.email]
    // WHERE email = $1::TEXT OR username = $2::TEXT


    let alreadyUser = await db.query(query, values);

    if (alreadyUser.rows.length) {
        return res.status(500).json("Användaren finns redan")
    }

    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User(req.body.username, req.body.email, hash)

    const addUserQuery = "INSERT INTO users (username, email, password) VALUES ($1::TEXT, $2::TEXT, $3::TEXT)";

    let response = await db.query(addUserQuery, [newUser.username, newUser.email, newUser.password]);

    res.json(newUser)
    // let resQ = await db.query(query, [req.body.email, req.body.username], (err, data) => {
    //     if (err) return res.json(err)
    //     if (data.length) return res.status(409).json("Användare redan regristerad");

    // let user = new User(req.body.username, req.body.email, req.body.password)



    // const query = "INSERT INTO users(username, password, email) VALUES ($1::TEXT, $2::TEXT, $3::TEXT)";

    // let values = [user.username, hash, user.email, user.createDate, user.lastLoggedIn]

    // db.query(query, values, (err, data) => {
    //     if (err) return res.json(err)
    //     return res.status(200).json("Användare har regristrerats")
    // })



}
//om ja avbryt



//om nej lägg till




export async function login(req, res) {

    console.log(req, "==========================")
    const q = "SELECT * FROM users WHERE username = $1::TEXT";
    db.query(q, [req.username], (err, data) => {
        console.log(data.rows, " this is data .-")

        let isPasswordCorrect;

        // if (err) return json(err);
        if (!req) {
            //     return err.status(404).json("User not found!")
            // } else {
            console.log("No user found")

        } else {
            isPasswordCorrect = bcrypt.compareSync(
                req.password,
                data.rows[0].password
            );
        }

        if (!isPasswordCorrect)
            console.log("Wrong username or password!");

        const token = jwt.sign({ id: data.rows[0].id }, "testSecret");

        console.log(token, " token")

        return token
    })








    // const query = "SELECT * FROM users WHERE username = $1::TEXT";
    // const values = [req.body.username];

    // let findUser = (await db.query(query, values)).rows[0];


    // if (!findUser)
    //     return res.status(404).json("Användaren finns inte");


    // const checkPassword = bcrypt.compareSync(req.body.password, findUser.password);
    // if (!checkPassword)
    //     return res.status(400).json("Fel användarnamn eller lösenord");

    // const token = generateAccessToken(findUser)

    // // let userId = findUser.id;
    // // const token = jwt.sign(userId, "Sapppersecret");



    // res
    //     .cookie("accessToken", token)
    //     .json({ accessToken: token })

}

// export function authenticateToken(req, res, next) {

//     console.log("<------------------------")
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]

//     if (token == null) return res.sendStatus(401)

//     jwt.verify(token, "Sapppersecret", (err, user) => {
//         if (err) return res.sendStatus(403)
//         req.user = user;

//         next();
//     })
// }

const generateAccessToken = (user) => {
    return jwt.sign({ id: user.id }, "mySecretKey", {
        expiresIn: "2h",
    });
};

export async function verifyToken(token) {
    let resToken = jwt.verify(token, "testSecret")
    console.log(resToken, " this is re stoke")
    return resToken

}


export const logout = (req, res) => {
    res.clearCookie("accessToken").status(200).json("fuck offf asshole!")
}