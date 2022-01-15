import React, {useEffect, useState} from 'react';

import './posts.css'

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(value => {
                setPosts(value);
            })
    }, [])

    return (
        <div className='posts-container'>
            {
                posts.map(value => {
                    return <div className='posts'>

                        <div className='posts-info'>
                            <p><span>User id at post</span> - {value?.userId};</p>
                            <p><span>id</span> - {value?.id};</p>
                            <p><span>Title of post</span> - {value?.title};</p>
                            <p><span>Post body</span> - {value?.body};</p>
                        </div>

                    </div>
                })
            }
        </div>
    );
};

export default Posts;