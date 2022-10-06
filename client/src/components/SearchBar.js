import React, { useState } from "react";
import styles from '../css/SearchBar.css'

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const searchedContent = [];

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    if (searchInput.length > 0) {
        searchedContent.filter((content) => {
            return content.match(searchInput);
        });
    }

    return (
        < >
            <input className="search"
                type="search"
                placeholder="Sök..."
                onChange={handleChange}
                value={searchInput} />


        </>)
};

export default SearchBar;