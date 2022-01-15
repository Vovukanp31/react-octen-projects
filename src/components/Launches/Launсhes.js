import React, {useEffect, useState} from 'react';

import './launches.css'


const Launсhes = () => {

    const [launches, setlaunches] = useState([])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(value => {
                let filteredValue = value.filter(value => value.launch_year !== '2020');
                setlaunches(filteredValue);
            });
    }, [])

    return (
        <div className='launches-container'>
            {
                launches.map(value => {
                    return <div className='launch-card'>

                        <div className='launch-info'>
                            <p>{value?.mission_name}</p>
                            <span>{value?.launch_year}</span>
                        </div>

                        <img src={value?.links?.mission_patch_small} alt="mission logo"/>

                    </div>

                })
            }
        </div>
    );
};

export default Launсhes;