import React from 'react';
import {NavLink} from "react-router-dom";

import css from "./album.module.css"

const Album = ({album}) => {

    const {id, title} = album;

    return (
        <div className={css.albumElem}>
            <p>Album No: {id}</p>
            <NavLink to={`${id}/photos`} state={album}>See all album:"{title}" photos</NavLink>
        </div>
    );
};

export default Album;