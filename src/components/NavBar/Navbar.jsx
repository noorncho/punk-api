import React from 'react';
import FiletersList from '../FiltersList/FiletersList';
import SearchBox from '../SearchBox/SearchBox';
import "./Navbar.scss";

const Navbar = (props) => {
    const {handleInput, filterAcidity, filterAlcohol, filterClassic} = props;
    //const {searchTerm, handleInput} = props
    return (
        <div className="navBar">
            <SearchBox handleInput={handleInput} />
            <FiletersList filterAcidity={filterAcidity} filterAlcohol={filterAlcohol} filterClassic={filterClassic} />
        </div>
    )
}

export default Navbar;
