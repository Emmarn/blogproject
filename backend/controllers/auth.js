import db from '../db.js';
import bcrypt from 'bcryptjs';
import User from '../models/User.js'


export async function register(req, res) {


    //kolla om användare finns
    const query = "SELECT * FROM users WHERE username = $1::TEXT OR email = $2::TEXT";
    const values = [req.body.username, req.body.email]
    // WHERE email = $1::TEXT OR username = $2::TEXT

    let alreadyUser = await db.query(query, values);



    if (alreadyUser.rows.length) {
        return res.status(500).json("Användaren finns redan")
    }

    res.json("11")

    // let resQ = await db.query(query, [req.body.email, req.body.username], (err, data) => {
    //     if (err) return res.json(err)
    //     if (data.length) return res.status(409).json("Användare redan regristerad");

    // let user = new User(req.body.username, req.body.email, req.body.password)

    // let salt = bcrypt.genSaltSync(10);
    // let hash = bcrypt.hashSync(user.password, salt);

    // const query = "INSERT INTO users(username, password, email) VALUES ($1::TEXT, $2::TEXT, $3::TEXT)";

    // let values = [user.username, hash, user.email, user.createDate, user.lastLoggedIn]

    // db.query(query, values, (err, data) => {
    //     if (err) return res.json(err)
    //     return res.status(200).json("Användare har regristrerats")
    // })



}
//om ja avbryt



//om nej lägg till




export const login = (req, res) => {
    res.json("auth controlled")
}
export const logout = (req, res) => {
    res.json("auth controlled")
}