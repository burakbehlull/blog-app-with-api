import axios from 'axios';

const API = axios.create({
    baseURL: '/api',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
})

const apiRequest = {
    get: async (url: string, params = {}, config = {}) => {
        try {
        const response = await API.get(url, { ...config, params })
        return response.data
        } catch (error) {
        console.error('GET Error:', error)
        throw error
        }
    },
    post: async (url: string, data: object | undefined, config = {}) => {
        try {
        const response = await API.post(url, data, config)
        return response.data
        } catch (error) {
        console.error('POST Error:', error)
        throw error
        }
    },
    put: async (url:string, data: object | undefined, config = {}) => {
        try {
        const response = await API.put(url, data, config)
        return response.data
        } catch (error) {
        console.error('PUT Error:', error)
        throw error
        }
    },
    delete: async (url: string, config = {}) => {
        try {
        const response = await API.delete(url, config)
        return response.data
        } catch (error) {
        console.error('DELETE Error:', error)
        throw error
        }
    }
}

export default apiRequest;