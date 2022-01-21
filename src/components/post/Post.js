import React from 'react';

const Post = ({post}) => {

    const {id, title} = post;

    return (
        <div>
            <h2>Post id - {id}</h2>
            <h3>Post title - {title}</h3>
        </div>
    );
};

export default Post;