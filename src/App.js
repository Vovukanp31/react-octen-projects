import React, {useEffect, useState} from 'react';
import Form from "./components/form/Form";
import Users from "./components/users/Users";
import {userService} from "./services/user.service";

const App = () => {

    const [users, setUsers] = useState([]);
    const [filteredUsers, setfilteredUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => {
            setUsers([...value])

            setfilteredUsers([...value])
        })
    }, [])

    const getFilter = (data) => {

        let filterArr = [...users]

        if (data.name) {
            filterArr = filterArr.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
        }

        if (data.username) {
            filterArr = filterArr.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
        }

        if (data.email) {
            filterArr = filterArr.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
        }

        setfilteredUsers(filterArr);

    }

    return (
        <div>
            <Form getFilter={getFilter}/>
            <Users user={filteredUsers}/>
        </div>
    );
};

export default App;