import React from 'react';
import FiletersList from '../FiltersList/FiletersList';
import SearchBox from '../SearchBox/SearchBox';
import "./Navbar.scss";

const Navbar = () => {
    return (
        <div className="navBar">
            <SearchBox />
            <FiletersList />
        </div>
    )
}

export default Navbar;
