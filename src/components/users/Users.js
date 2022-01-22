import React from 'react';
import User from "../user/User";

const Users = ({user}) => {
    console.log(user);
    return (

        <div>
            {
                user.map(value => {
                    return <User key={value.id} user={value}/>
                })
            }
        </div>
    );
};

export default Users;