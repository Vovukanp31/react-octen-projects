import React from 'react';

const Comment = ({comObj}) => {

    const {id, postId, name, email, body} = comObj;

    return (
        <div>
            <div>Id: {id}</div>
            <div>PostId: {postId}</div>
            <div>Name: {name}</div>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    );
};

export default Comment;