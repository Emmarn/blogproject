import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context';

const Blog = () => {

    const [posts, setPosts] = useState();

    async function getAllPosts() {

        const url = "http://localhost:8000/api/blogs/all";
        const response = await fetch(url)

        return response.json();
    }

    useEffect(() => {
        getAllPosts().then((res) => setPosts(res))

    }, [])


    return (

        posts ? <div>
            <h1>{posts[0].title}</h1>
        </div> : <div>Löding</div>
    )
}

export default Blog;