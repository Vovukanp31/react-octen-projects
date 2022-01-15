import React, {useEffect, useState} from 'react';

import './comments.css'

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(value => {
                setComments(value);
            })
    }, [])

    return (
        <div className='comments-container'>
            {
                comments.map(value => {
                    return <div className='comments'>

                        <div className='comments-info'>
                            <p>Post id - {value?.postId};</p>
                            <p>id - {value?.id};</p>
                            <p>Name - {value?.name};</p>
                            <p>Email - {value?.email};</p>
                            <p>Body of comment - {value?.body}</p>
                        </div>

                    </div>
                })
            }
        </div>
    );
};

export default Comments;