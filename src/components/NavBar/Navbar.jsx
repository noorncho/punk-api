import React from 'react';
import FiletersList from '../FiltersList/FiletersList';
import SearchBox from '../SearchBox/SearchBox';
import "./Navbar.scss";

const Navbar = (props) => {
    const {handleInput} = props;

    return (
        <div className="navBar">
            <SearchBox handleInput={handleInput} />
            <FiletersList />
        </div>
    )
}

export default Navbar;
