import React from 'react';
import FilterItem from '../FilterItem/FilterItem';

const FiletersList = () => {
    const filters = ["High Alcohol (ABV > 6%)", "Classic Range", "High Acidity (pH < 4"];
    
    return (
        <div>
            <h4 className="filter-header">
                <FilterItem item={filters} />
            </h4>
        </div>
    )
}

export default FiletersList;
