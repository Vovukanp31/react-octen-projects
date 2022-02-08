import React from 'react';

const Cats = ({cats, deleteCat}) => {
    return (
        <div>
            {
                cats.map(cat => {
                    return <div key={cat.id}>
                        {cat.name}
                        <button onClick={() => deleteCat(cat.id)}>delete</button>
                    </div>
                })
            }
        </div>
    );
};

export default Cats;