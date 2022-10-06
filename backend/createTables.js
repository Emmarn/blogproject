import db from "../backend/db.js"

export default async function createTable() {
    db.query(
        "CREATE TABLE IF NOT EXISTS blog (blog_id serial PRIMARY KEY, title TEXT, ingress TEXT, content TEXT, user_id INT); CREATE TABLE IF NOT EXISTS users (user_id serial PRIMARY KEY, username TEXT, email TEXT, password TEXT)",

    );
    ;
    console.log("Created blog table and users table...")
}

