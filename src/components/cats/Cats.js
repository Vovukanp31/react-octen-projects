import React from 'react';

import css from './cats.module.css'

const Cats = ({cats, deleteCat}) => {
    return (
        <div className={css.catsContainer}>
            {
                cats.map(cat => {
                    return <div className={css.catItem} key={cat.id}>
                        {cat.name}
                        <button onClick={() => deleteCat(cat.id)}>delete</button>
                    </div>
                })
            }
        </div>
    );
};

export default Cats;