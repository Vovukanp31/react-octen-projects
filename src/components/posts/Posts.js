import React from 'react';
import Post from "../post/Post";
import css from './posts.module.css'

const Posts = ({posts}) => {
    return (
        <div className={css.postsContainer}>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;