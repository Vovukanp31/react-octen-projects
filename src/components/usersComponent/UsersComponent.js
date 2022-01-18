import React from 'react';

const UsersComponent = ({obj, chosenUser}) => {
    return (
        <div>
            <h2>{obj.name}</h2>
            <button onClick={() => chosenUser(obj.id)}>GetDetails</button>
        </div>
    );
};

export default UsersComponent;