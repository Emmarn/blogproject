import { Router, Navigate, useNavigate } from "react-router";



// En knapp som ska navigera till Blogpost inlägget, för att läsa hela texten

function ReadMoreBtn() {
    let navigate = useNavigate();


    return (
        <>
            <button className="read-more-btn" onClick={() => navigate("/Blogpost.js")}>Läs mer</button>
        </>
    )
}

export default ReadMoreBtn;