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
        <div className='users-container'>
            {
                users.map(value => {
                    return <div className='users'>

                        <div>
                            <p><span>User id</span> - {value?.id};</p>
                            <p><span>Name of user</span> - {value?.name};</p>
                            <p><span>Username</span> - {value?.username};</p>
                            <p><span>User email</span> - {value?.email};</p>
                        </div>

                        <div>
                            <p><span>User address</span> - {`Street: ${value?.address?.street};
                       Suite: ${value?.address?.suite};
                       City: ${value?.address?.city};
                       Zipcode: ${value?.address?.zipcode};`}</p>

                            <p><span>Geoposition of user</span> - {`Lat: ${value?.address?.geo?.lat};
                      Lng: ${value?.address?.geo?.lng}`}.</p>
                        </div>

                        <div>
                            <p><span>User phone number</span> - {value?.phone};</p>
                            <p><span>User website</span> - {value?.website};</p>
                        </div>

                        <div>
                            <span>User company</span> - {`Name: ${value?.company?.name};
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