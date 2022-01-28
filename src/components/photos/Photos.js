import React from 'react';

import css from './photos.module.css'

const Photos = ({photoItem:{title, thumbnailUrl}}) => {
    return (
        <div className={css.photoElem}>
            <p>{title}</p>
            <img src={`${thumbnailUrl}`} alt={`{title}`}/>
        </div>
    );
};

export default Photos;