import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "4fe004f6-3126-4f2c-96d6-4a1feb41787f"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 6) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            });
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            });
    },

    getProfile(userId) {
        console.warn('please use profileAPI');
        return profileAPI.getProfile(userId)
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    },
};



