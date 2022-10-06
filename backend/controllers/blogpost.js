import db from "../db.js";
import Blog from '../models/Blog.js'


//Create blogpos,
//delete blogpost,
//edit blogpost,



export async function createPost(title, tag, ingress, text) {
    let content = request.body.content;

    let blog = new Blog(content);

    const query =
        'INSERT INTO blog VALUES ($1::TEXT, $2::TEXT, $3::TEXT, $4::TEXT)';

    const values = [
        blog.title,
        blog.tag,
        blog.ingress,
        blog.content,
        blog.createdDate
    ];
    let res = await db.query(query, values);

    response.json(blog);

}

async function deletePost(request, response) {
    let id = parseInt(request.params.id);

    const query =
        'DELETE FROM users WHERE id = $1::INT';
    const values = [id];
    let res = await db.query(query, values);

    response.json({ success: true, deleteCout: res.rowCount });

}

async function updatePost(request, response) {
    const query =
        'UPDATE blog SET title, tag, ingress, content WHERE user_id = $1::INT'

}


async function getUserPosts(request, response) {
    const query =
        'SELECT * FROM users, blog WHERE users.email=blog.ingress;';

}

export async function getAllPosts(req, res) {
    console.log("we get in??")
    const query = "SELECT * FROM blog;"

    db.query(query, (err, data) => {
        if (err) return res.status(401).json("There was an error")
        res.status(200).json(data.rows)
    })
}



// pool.connect((err) => {
//     if (err) console.log(err);
//     else {
//         user(pool);
//         post(pool);
//         join(pool);
//         getBlogs(pool);
//         // get(pool);
//     }
// });

// GRANT SELECT ON blog TO PUBLIC;
// GRANT SELECT, UPDATE, INSERT, DELETE ON blog TO id = $1::INT;