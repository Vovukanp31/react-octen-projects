import React, {useEffect, useState} from 'react';
import {getUserPosts} from "../../services/userServices/UserServices";

const UserPostComponent = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      getUserPosts().then(value => {
          setPosts(value.data);
      })
    }, [])
    return (
        <div>
            {

            }
        </div>
    );
};

export default UserPostComponent;