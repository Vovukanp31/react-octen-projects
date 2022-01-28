import React from 'react';

import css from './comment.module.css'

const Comment = ({comObj}) => {

    const {id, postId, name, email, body} = comObj;

    return (
        <div className={css.comment}>
            <div>Id: {id}</div>
            <div>PostId: {postId}</div>
            <div>Name: {name}</div>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    );
};

export default Comment;