import React from 'react';

import css from'./dogs.module.css'

const Dogs = ({dogs, deleteDog}) => {
    return (
        <div className={css.dogsContainer}>
            {
                dogs.map(dog => {
                    return <div className={css.dogItem} key={dog.id}>
                        {dog.name}
                        <button onClick={() => {deleteDog(dog.id)}}>delete</button>
                    </div>
                })
            }
        </div>
    );
};

export default Dogs;