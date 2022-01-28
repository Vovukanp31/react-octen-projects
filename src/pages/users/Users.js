import React, {useEffect, useState} from 'react';

import {usersService} from "../../services/users.service";
import User from "../../components/user/User";
import {Outlet} from "react-router-dom";
import css from './users.module.css'

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        usersService.getAll().then(value => setUsers(value));
    }, [])

    return (
        <div className={css.mainContainer}>

            <div className={css.allUsers}>
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
            <Outlet/>
        </div>
    );
};

export default Users;