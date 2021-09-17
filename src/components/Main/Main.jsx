import React from 'react';
import CardList from '../CardList/CardList';

import beers from '../../data/beers';

const Main = () => {
    return (
        <div className="main">
            <CardList beerArr={beers} />
        </div>
    )
}

export default Main;
