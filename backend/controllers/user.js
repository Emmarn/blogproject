import db from '../db.js'
import User from '../models/User.js'
import jwt from 'jsonwebtoken'

db.query("CREATE TABLE IF NOT EXISTS users (user_id SERIAL PRIMARY KEY, username text, email text, password text, createDate date, lastLoggedIn date);");

// async function createTable() {
//     const query =
//         'CREATE TABLE IF NOT EXISTS users (username text, email text, password text) ';
// }

export async function listUsers(req, res,) {
    console.log("we get in??")
    const query = "SELECT * FROM users;"

    db.query(query, (err, data) => {
        if (err) return res.status(401).json("There was an error")
        res.status(200).json(data.rows)
    })
}



export async function getUsers(req, res) {
    const query = 'SELECT * FROM users WHERE id = $1::INT';
    let user = await db.query(query, [req.body.id]);
    if (res) res.json(user)
}

export async function getUserByJwt(req, res) {
    let decodedJwt = jwt.verify(req.body, "SikretKej");
    console.log(decodedJwt.id, " decoded jwt id?")
    const query = 'SELECT * FROM users WHERE id = $1::INT';
    let user = await db.query(query, [decodedJwt.id])
    res.json(user)
}

// GRANT SELECT ON users TO PUBLIC;
// GRANT SELECT, UPDATE, INSERT ON blog TO id = $1::INT;