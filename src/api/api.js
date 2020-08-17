import * as axios from 'axios';

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {'API-KEY': 'ff828688-16d2-4be6-b299-7ba046a4b32d'}
})

export const UsersApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users`//?page=${currentPage}&count=${pageSize}`
            + (currentPage ? `?page=${currentPage}&` : '')
            + (pageSize ? `count=${pageSize}` : '') //доставить & когда буду добавлять параметры
            // + (followed ? `friend=${followed}&` : '')
            // + (searchName ? `term=${searchName}&` : '')

        )
            .then(response => response.data)
    },
    getFriends() {
        return instance.get(`users?friend=${true}`
        )
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
    setUserProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    setStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`,
            {status: status})
    },
    savePhoto(file) {
        let formData = new FormData()
        formData.append('image', file)

        return instance.put(`profile/photo`,
            formData, {
                headers: {'Content-Type': 'multipart/form-data'}
            }
        )
    },
    saveProfile(profile) {
        return instance.put(`profile`,
            profile)
    },
}

export const AuthApi = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false, captcha) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    },

}


export const securityApi = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}


export const dialogsApi = {
    getDialogs() {
        return instance.get(`dialogs`)
            .then(res => res.data)
    },
    getMessages(userId) {
        return instance.get(`dialogs/${userId}/messages`)
            .then(res => res.data.items)
    },
    startDialogs(userId) {
        return instance.put(`dialogs/${userId}`)
            .then(res => res.data)
    },
    sendMessage(userId, body) {
        return instance.post(`dialogs/${userId}/messages`, {body})
            .then(res => res.data)
    }
}