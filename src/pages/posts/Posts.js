import React, {useEffect, useState} from 'react';

import {postsService} from "../../services/posts.service";
import {Outlet} from "react-router-dom";
import css from './posts.module.css';
import Post from "../../components/post/Post";

const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        postsService.getAll().then(value => setPosts(value));

    }, [])

    return (
        <div className={css.mainContainer}>
            <div className={css.allPosts}>
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
            <Outlet/>
        </div>
    );
};

export default Posts;