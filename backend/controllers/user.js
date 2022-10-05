import db from '../db.js'
import User from '../models/User.js'

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



async function getUsers(req, response) {
    const query = 'SELECT * FROM users;';
    let res = await db.pool.query(query);
    response.json(res.rows.map(User.convert));
}

// GRANT SELECT ON users TO PUBLIC;
// GRANT SELECT, UPDATE, INSERT ON blog TO id = $1::INT;