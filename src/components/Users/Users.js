import React, {useEffect, useState} from 'react';

import './users.css'

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(value => {
                setUsers(value);
            })
    }, [])
    return (
        <div>
            {
                users.map(value => {
                    return <div className='users'>
                        <div className='user-main-info'>
                            <p>User id - {value?.id};</p>
                            <p>Name of user - {value?.name};</p>
                            <p>Username - {value?.username};</p>
                            <p>User email - {value?.email};</p>
                        </div>

                        <div className='user-loc'>
                            <p>User address - {`Street: ${value?.address?.street};
                       Suite: ${value?.address?.suite};
                       City: ${value?.address?.city};
                       Zipcode: ${value?.address?.zipcode};`}</p>

                            <p>Geoposition of user - {`Lat: ${value?.address?.geo?.lat};
                      Lng: ${value?.address?.geo?.lng}`}.</p>
                        </div>

                        <div className='user-contacts'>
                            <p>User phone number - {value?.phone};</p>
                            <p>User website - {value?.website};</p>
                        </div>

                        <div className='user-company'>
                            User company - {`Name: ${value?.company?.name};
                      Catch phrase: ${value?.company?.catchPhrase};
                      Bs: ${value?.company?.bs}`}.
                        </div>

                    </div>
                })
            }
        </div>
    );
};
export default Users;