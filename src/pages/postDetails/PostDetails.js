import React, {useEffect} from 'react';

import {Outlet, useLocation, useNavigate} from "react-router-dom";
import css from './postDetails.module.css'

const PostDetails = () => {

    let {state:post} = useLocation()

    const {id, userId, title, body} = post;

    let commentsNav = useNavigate();

    return (
        <div className={css.postDetailsContainer}>
            <div>
            <h2>Post id: {id}</h2>
            <h3>User id: {userId}</h3>
            <p>Title of post: {title}</p>
            <p>Body of Post: {body}</p>
                <button onClick={() => {
                    commentsNav(`comments`, {state:id});
                }}>Show comments for this post</button>
            </div>
                <Outlet/>
        </div>
    );
};

export default PostDetails;