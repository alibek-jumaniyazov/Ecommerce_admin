export const domain = 'https://ecommerce.main-gate.appx.uz'
export const API_MODE = '/dev/adminka'
const accessToken = localStorage.getItem("user")
? JSON.parse(localStorage.getItem("user")).tokens.access
: null;


export const urls = {
    auth: {
        login: '/auth/login',
        refresh: '/auth/refresh',
    },
    token:accessToken,
    categories: {
        getList: '/category/list',
        post: '/category/add',
        delete: (id) => `/category/${id}`,
        put: (id) => `/category/edit/${id}`,
    },
    brand: {
        getList: '/brand/list',
        post: '/brand/add',
        delete: (id) => `/brand/delete/${id}`,
        put: (id) => `/brand/update/${id}`,
    },
    banner: {
        getList: '/events/list',
        post: '/events/add',
        delete: (id) => `/events/delete/${id}`,
        put: (id) => `/events/update/${id}`,
    },
    user: {
        getList: '/user/list',
        post: '/user/create',
        delete: (id) => `/user/delete/${id}`,
    },
}