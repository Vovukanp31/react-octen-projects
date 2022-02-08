import React from 'react';

const Dogs = ({dogs, deleteDog}) => {
    return (
        <div>
            {
                dogs.map(dog => {
                    return <div key={dog.id}>
                        {dog.name}
                        <button onClick={() => {deleteDog(dog.id)}}>delete</button>
                    </div>
                })
            }
        </div>
    );
};

export default Dogs;