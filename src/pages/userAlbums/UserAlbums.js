import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {albumsService} from "../../services/albums.service";
import Album from "../../components/album/Album";
import css from './userAlbums.module.css'

const UserAlbums = () => {

    const [albums, setAlbums] = useState([])

    const {id} = useParams()

    useEffect(() => {
        albumsService.getAlbumOfUser(id).then(value => setAlbums([...value]))
    }, [id])

    return (
        <div className={css.userAlbumsContainer}>
            <div className={css.userAlbumContainer}>
                {
                    albums.map(value => <Album key={value.id} album={value}/>)
                }
            </div>

                <Outlet/>
        </div>
    );
};

export default UserAlbums;