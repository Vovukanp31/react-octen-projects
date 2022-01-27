import React from 'react';

import {NavLink} from "react-router-dom";
import css from './post.module.css'

const Post = ({post}) => {
    const {id} = post;
    return (
        <div className={css.postLink}>
            <NavLink key={id} to={`${id}`} state={post}>Post No:<span>{id}</span>.   <span>Get details</span></NavLink>
        </div>
    );
};

export default Post;