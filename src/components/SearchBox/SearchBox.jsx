import React, {useState} from 'react';
import "./SearchBox.scss";

const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleInput =(e) =>{
        const cleanInput = e.target.value.toLowerCase();
        setSearchTerm(cleanInput);
    }

    return (
        <form className="search-box">
            <input type="text" className="search-box__input" placeholder="Search Beer..." />
        </form>
    )
}

export default SearchBox;
