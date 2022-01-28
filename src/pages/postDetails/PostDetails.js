import React from 'react';

import {Outlet, useLocation, useNavigate} from "react-router-dom";
import css from './postDetails.module.css'

const PostDetails = () => {

    const {state} = useLocation()

    const {id, userId, title, body} = state;

    let commentsNav = useNavigate();

    return (
        <div className={css.postDetailsContainer}>
            <div className={css.postDetailsContainerElements}>
                <span><h3>Post id: {id}</h3></span>
                <h3>User id: {userId}</h3>
                <p>Title of post: {title}</p>
                <p>Body of Post: {body}</p>
                <button onClick={() => {
                    commentsNav(`comments`, {state: state});
                }}>Show comments for this post
                </button>
            </div>
                <Outlet/>
        </div>
    );
};

export default PostDetails;