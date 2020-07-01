import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {"API-KEY": "ff828688-16d2-4be6-b299-7ba046a4b32d"}
})

export const UsersApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`,
        {})
    },
    unFollow(id) {
        return instance.delete(`follow/${id}`)
    },
}

export const ProfileApi = {
    setUserProfile(userId){
       return instance.get(`profile/${userId}`)
    },
    setStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`,
            {status:status})
    }
}

export const AuthApi = {
    me(){
       return instance.get(`auth/me`)
    }
}