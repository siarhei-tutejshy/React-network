import * as axios from 'axios';

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": '27ccf072-1ff6-434a-8637-49f988e79987' ,
    
}
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data);
    },

    follow(userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
};

export const profileAPI = {
    getProfile(userId = '21827') {
        return instance.get(`profile/${userId}`).then(response => response.data)
    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`).then(response => response.data.data)
    }
}


