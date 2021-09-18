import React from 'react';
import FilterItem from '../FilterItem/FilterItem';

const FiletersList = () => {
    const filters = [["alcohol","High Alcohol (ABV > 6%)"], ["classic","Classic Range"], ["acidity","High Acidity (pH < 4)"]];
    
    return (
        <div>
            <h4 className="filter-header">
                <FilterItem items={filters} />
            </h4>
        </div>
    )
}

export default FiletersList;
