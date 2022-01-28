import {axiosService} from "./axios.service";
import {urls} from '../configs/urls'

export const albumsService = {
    getAlbumOfUser: (userId) => axiosService.get(`/users/${userId}${urls.albums}`).then(value => value.data),
    getPhotosFromAlbum: (albumId) => axiosService.get(`${urls.albums}/${albumId}${urls.photos}`).then(value => value.data)
}