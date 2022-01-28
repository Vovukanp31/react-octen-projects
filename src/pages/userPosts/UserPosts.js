import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import PostsOfUser from "../../components/PostsOfUser/PostsOfUser";
import css from './userPosts.module.css'

const UserPosts = () => {

    const {state: user} = useLocation();
    const {id} = user;

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getPostsOfUser(id).then(value => setPosts(value));
    }, [id])

    return (
        <div className={css.userPostsContainer}>
            {
                posts.map(value => <PostsOfUser key={value.id} post={value}/>)
            }
        </div>
    );
};

export default UserPosts;