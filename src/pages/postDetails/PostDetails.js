import React from 'react';

import {Outlet, useLocation} from "react-router-dom";

const PostDetails = () => {

    const {state:post} = useLocation()

    const {id, userId, title, body} = post;

    return (
        <div>
            <h2>Post id: {id}</h2>
            <h3>User id: {userId}</h3>
            <p>Title of post: {title}</p>
            <p>Body of Post: {body}</p>
            <Outlet/>
        </div>
    );
};

export default PostDetails;