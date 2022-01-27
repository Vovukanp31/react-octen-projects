import React, {useEffect, useState} from 'react';
import {usersService} from "../../services/users.service";
import User from "../../components/user/User";

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        usersService.getAll().then(value => setUsers(value));
    }, [])

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;