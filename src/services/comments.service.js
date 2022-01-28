import {axiosService} from "./axios.service";

import {urls} from '../configs/urls';


export const commentsService = {
    getAll: () => axiosService.get(urls.comments).then(value => value.data),
    getCommentsOfPost: (postId) => axiosService.get(`${urls.comments}?postId=${postId}`).then(value => value.data)
}