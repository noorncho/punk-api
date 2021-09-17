import React from 'react';

const FilterItem = (props) => {
    const {items} = props;
    
    return items.map((item) => {
        return (
            <>
                <section>
                    <label>{item}</label>
                </section>
            </>
        )
    });
}

export default FilterItem;
