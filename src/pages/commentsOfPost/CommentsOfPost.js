import React, {useEffect, useState} from 'react';
import {Outlet, useLocation} from "react-router-dom";

import {commentsService} from "../../services/comments.service";
import Comment from "../../components/comment/Comment";
import css from "./commentsOfPost.module.css"

const CommentsOfPost = () => {

    const {state:postId} = useLocation();

    const [comment, setComment] = useState([]);

    useEffect(() => {
        commentsService.getCommentsOfPost(postId).then(value => setComment(value));
    },[postId])

    return (
        <div className={css.commentsContainer}>
            {
                 comment.map(comment => <Comment key={comment.id} comObj={comment}/>)
            }
            {/*<Outlet/>*/}
        </div>
    );
};

export default CommentsOfPost;