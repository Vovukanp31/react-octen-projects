import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {albumsService} from "../../services/albums.service";
import Photos from "../../components/photos/Photos";
import css from './albumPhotos.module.css'

const AlbumPhotos = () => {

    const {state:{id}} = useLocation();

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        albumsService.getPhotosFromAlbum(id).then(value => setPhotos(value));
    }, [id])

    return (
        <div className={css.photosElementsContainer}>
            {
                photos.map(value => <Photos key={value.id} photoItem={value}/>)
            }
        </div>
    );
};

export default AlbumPhotos;