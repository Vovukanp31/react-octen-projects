import React, {useEffect, useState} from 'react';
import './App.css';

import {getUser, getUsers} from "./services/userServices/UserServices";
import UsersComponent from "./components/usersComponent/UsersComponent";
import UserComponent from "./components/userComponent/UserComponent";


function App() {

    let [users, setUsers] = useState([]);
    let [chosenUserObj, setChosenUserObj] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value?.data))
    }, []);

    const chosenUser = (id) => {
        getUser(id).then(value => setChosenUserObj(value?.data));
    }

    return (
        <div className="App">
            <div className='user-info'>

                {
                    users.map(user => {
                        console.log(user)
                        return <div className='user-card'>
                            <UsersComponent key={user.id} obj={user} chosenUser={chosenUser}/>
                        </div>
                    })
                }

                <UserComponent chosenUserObj={chosenUserObj}/>


            </div>

        </div>
    );
}

export default App;
