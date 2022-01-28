import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import User from "../user/User";
import css from './users.module.css'

const Users = ({chooseUser}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value));
    }, [])

    return (
        <div className={css.usersContainer}>
            {
                users.map(value => {
                    return <User key={value.id} user={value} chooseUser={chooseUser}/>
                })
            }
        </div>
    );
};

export default Users;