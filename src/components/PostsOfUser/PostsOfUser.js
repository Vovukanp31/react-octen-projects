import React from 'react';

import css from './postsOfUser.module.css'

const PostsOfUser = ({post:{id, title, body}}) => {

    return (
        <div className={css.postOfUser}>
          <h3>Post id: {id}</h3>
            <h3>Post title: {title}</h3>
            <h3>Post body: {body}</h3>
        </div>
    );
};

export default PostsOfUser;