import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {commentsService} from "../../services/comments.service";
import Comment from "../../components/comment/Comment";
import css from "./commentsOfPost.module.css"

const CommentsOfPost = () => {

    const {state:post} = useLocation();

    const {id} = post;

    const [comment, setComment] = useState([]);

    useEffect(() => {
        commentsService.getCommentsOfPost(id).then(value => setComment(value));
    },[id])

    return (
        <div className={css.commentsContainer}>
            {
                 comment.map(comment => <Comment key={comment.id} comObj={comment}/>)
            }
        </div>
    );
};

export default CommentsOfPost;