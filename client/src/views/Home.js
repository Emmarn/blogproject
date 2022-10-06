import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context';
import ReadMoreBtn from '../components/ReadMoreBtn';
import { Header } from '../components/Header';
import styles from '../css/Home.css';



const Home = () => {

    const { currentUser, login } = useContext(AuthContext);

    const [blogPosts, setBlogPosts] = useState();


    const blogs = async () => {
        let res = await fetch("http://localhost:8000/api/blogs/all")
            .then(res => res.json())
            .then(data => console.log(data, " this is data"))
        return res;
    }


    console.log(blogs, " blogposts")

    const getLocalStorage = localStorage.getItem('jwt');
    console.log(getLocalStorage, " <-----------------")
    const navigate = useNavigate();

    //if (getLocalStorage) 

    const handleNav = () => {
        navigate("/login")
    }

    return (
        <>
            <Header />
            {currentUser && <div>Hei {currentUser.username}</div>}
            <div className="posts-container">
                <img id='author-img' src="https://images.photowall.com/products/65869/bunny-rabbit.jpg?h=699" alt='bunny'></img>
                <h2 id="title">Inlägg</h2>
                <div className="blog-post"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum...
                    <p id="author-name-home">Namn på författare</p>
                    <ReadMoreBtn />
                </div>
            </div>
            <div className="posts-container">
                <img id='author-img' src="https://product-image.juniqe-production.juniqe.com/media/catalog/product/seo-cache/x800/735/12/735-12-101P/Miss-Bunny-Rabbit-Tein-Lucasson-Poster.jpg" alt='bunns'></img>
                <h2 id="title">Förr i tiden...</h2>
                <div className="blog-post"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum...
                    <p id="author-name">Birgitta Bunny</p>
                    <ReadMoreBtn />
                </div>
            </div>
            <div className="posts-container">
                <img id='author-img' src="https://thumbs.dreamstime.com/z/beautiful-rabbit-glasses-white-background-128974477.jpg" alt='bunnys'></img>
                <h2 id="title">Regnet öser ner</h2>
                <div className="blog-post"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum...
                    <p id="author-name">Torkel</p>
                    <ReadMoreBtn />
                </div>
            </div>
        </>
    );
}

export default Home;