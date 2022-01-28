import React from 'react';

import css from './post.module.css'

const Post = ({post}) => {

    const {id, title} = post;

    return (
        <div className={css.postCard}>
            <h2>Post id - {id}</h2>
            <h3>Post title - {title}</h3>
        </div>
    );
};

export default Post;