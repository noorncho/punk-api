import React from 'react';
import "./SearchBox.scss";

const SearchBox = (props) => {
    const {handleInput} = props;
    /*const [searchTerm, setSearchTerm] = useState("");
    const handleInput =(e) =>{
        const cleanInput = e.target.value.toLowerCase();
        setSearchTerm(cleanInput);
    }*/

    /*return (
        <form className="search-box">
            <input type="text" className="search-box__input" placeholder="Search Beer..." onInput={handleInput} />
        </form>
    )*/
    return (
        <div className="search-box">
            <input type="text" placeholder="Search beers" onInput={(e) => handleInput(e.target.value.toLowerCase())} />
        </div>
    )
}

export default SearchBox;
