import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const postsService = {
    getAll: () => axiosService.get(urls.posts).then(value => value.data),
    getPostsOfUser: (userId) => axiosService.get(`${urls.posts}?userId${userId}`).then(value => value.data)
}