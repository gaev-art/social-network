import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {"API-KEY": "ff828688-16d2-4be6-b299-7ba046a4b32d"}
})

export const Api = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followed(id) {
        return instance.delete(`follow/${id}`)

    },
    unFollowed(id) {
        return instance.post(`follow/${id}`,
            {})
    },
}